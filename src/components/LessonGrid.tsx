
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, Lock, Play } from 'lucide-react';

interface LessonGridProps {
  completedLessons: Set<number>;
}

const LessonGrid = ({ completedLessons }: LessonGridProps) => {
  const lessons = [
    // HTML Fundamentals
    { id: 1, title: "Introduction to Web Development", category: "HTML Fundamentals", difficulty: "Beginner", duration: "15 min" },
    { id: 2, title: "HTML Basics", category: "HTML Fundamentals", difficulty: "Beginner", duration: "20 min" },
    { id: 3, title: "Text Formatting and Links", category: "HTML Fundamentals", difficulty: "Beginner", duration: "25 min" },
    { id: 4, title: "Images and Media", category: "HTML Fundamentals", difficulty: "Beginner", duration: "20 min" },
    { id: 5, title: "HTML Forms (Intro)", category: "HTML Fundamentals", difficulty: "Beginner", duration: "30 min" },
    
    // CSS Styling
    { id: 6, title: "CSS Introduction", category: "CSS Styling", difficulty: "Beginner", duration: "20 min" },
    { id: 7, title: "CSS Syntax and Selectors", category: "CSS Styling", difficulty: "Beginner", duration: "25 min" },
    { id: 8, title: "Box Model & Layout Basics", category: "CSS Styling", difficulty: "Intermediate", duration: "35 min" },
    { id: 9, title: "Positioning and Float", category: "CSS Styling", difficulty: "Intermediate", duration: "30 min" },
    { id: 10, title: "Flexbox (Modern Layout)", category: "CSS Styling", difficulty: "Intermediate", duration: "40 min" },
    { id: 11, title: "CSS Grid (Optional/Intro)", category: "CSS Styling", difficulty: "Intermediate", duration: "35 min" },
    { id: 12, title: "Responsive Web Design", category: "CSS Styling", difficulty: "Intermediate", duration: "45 min" },
    { id: 13, title: "Forms with CSS", category: "CSS Styling", difficulty: "Intermediate", duration: "30 min" },
    { id: 14, title: "CSS Pseudo-classes and Effects", category: "CSS Styling", difficulty: "Advanced", duration: "25 min" },
    { id: 15, title: "Page Layout with Sections", category: "CSS Styling", difficulty: "Advanced", duration: "40 min" },
    
    // Final Project
    { id: 16, title: "Final Project Preparation", category: "Final Project", difficulty: "Advanced", duration: "30 min" },
    { id: 17, title: "Final Project Development", category: "Final Project", difficulty: "Advanced", duration: "60 min" },
    { id: 18, title: "Final Presentation and Evaluation", category: "Final Project", difficulty: "Advanced", duration: "45 min" },
  ];

  const categories = [
    { name: "HTML Fundamentals", color: "bg-blue-500/20 text-blue-300" },
    { name: "CSS Styling", color: "bg-purple-500/20 text-purple-300" },
    { name: "Final Project", color: "bg-green-500/20 text-green-300" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-300";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-300";
      case "Advanced": return "bg-red-500/20 text-red-300";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };

  const isLessonAvailable = (lessonId: number) => {
    if (lessonId === 1) return true;
    return completedLessons.has(lessonId - 1);
  };

  const groupedLessons = categories.map(category => ({
    ...category,
    lessons: lessons.filter(lesson => lesson.category === category.name)
  }));

  return (
    <div className="space-y-8">
      {groupedLessons.map((category) => (
        <div key={category.name}>
          <div className="flex items-center space-x-3 mb-6">
            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
            <Badge className={category.color}>
              {category.lessons.length} lessons
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.lessons.map((lesson) => {
              const isCompleted = completedLessons.has(lesson.id);
              const isAvailable = isLessonAvailable(lesson.id);
              
              return (
                <Card 
                  key={lesson.id}
                  className={`bg-white/10 backdrop-blur-lg border-white/20 transition-all duration-200 hover:scale-105 ${
                    isCompleted ? 'ring-2 ring-green-400/50' : ''
                  } ${
                    !isAvailable ? 'opacity-50' : 'hover:bg-white/20'
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-slate-400">
                          Lesson {lesson.id}
                        </span>
                        {isCompleted ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : isAvailable ? (
                          <Circle className="h-5 w-5 text-slate-400" />
                        ) : (
                          <Lock className="h-5 w-5 text-slate-500" />
                        )}
                      </div>
                      <Badge className={getDifficultyColor(lesson.difficulty)}>
                        {lesson.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg leading-tight">
                      {lesson.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Duration: {lesson.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className={`w-full ${
                        isCompleted 
                          ? 'bg-green-600 hover:bg-green-700 text-white' 
                          : isAvailable
                          ? 'bg-yellow-400 hover:bg-yellow-500 text-slate-900'
                          : 'bg-slate-600 text-slate-400 cursor-not-allowed'
                      }`}
                      disabled={!isAvailable}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Review
                        </>
                      ) : isAvailable ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Start Lesson
                        </>
                      ) : (
                        <>
                          <Lock className="h-4 w-4 mr-2" />
                          Locked
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonGrid;
