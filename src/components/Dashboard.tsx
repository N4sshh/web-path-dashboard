
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  LogOut, 
  BookOpen, 
  Trophy, 
  Play, 
  CheckCircle, 
  Circle,
  User,
  Zap
} from 'lucide-react';
import LessonGrid from './LessonGrid';
import CodePlayground from './CodePlayground';

interface DashboardProps {
  user: { name: string; email: string };
  onLogout: () => void;
}

const Dashboard = ({ user, onLogout }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState<'lessons' | 'playground'>('lessons');
  const [completedLessons] = useState(new Set([1, 2, 3, 6, 7])); // Mock completed lessons
  
  const totalLessons = 18;
  const completedCount = completedLessons.size;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Code className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-bold text-white">CodeStarter</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white">
                <User className="h-5 w-5" />
                <span className="hidden sm:inline">{user.name}</span>
              </div>
              <Button 
                onClick={onLogout}
                variant="outline" 
                size="sm"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">
            Welcome back, {user.name.split(' ')[0]}! 👋
          </h2>
          <p className="text-slate-300 text-lg">
            Continue your web development journey where you left off.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Progress</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">{progressPercentage}%</div>
              <Progress value={progressPercentage} className="mb-2" />
              <p className="text-xs text-slate-300">
                {completedCount} of {totalLessons} lessons completed
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Lessons Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{completedCount}</div>
              <p className="text-xs text-slate-300">
                Keep up the great work!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Streak</CardTitle>
              <Zap className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">7 days</div>
              <p className="text-xs text-slate-300">
                Amazing consistency!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-6 bg-white/10 backdrop-blur-lg p-1 rounded-lg border border-white/20 w-fit">
          <Button
            onClick={() => setActiveTab('lessons')}
            variant={activeTab === 'lessons' ? 'default' : 'ghost'}
            className={`${
              activeTab === 'lessons' 
                ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-500' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Lessons
          </Button>
          <Button
            onClick={() => setActiveTab('playground')}
            variant={activeTab === 'playground' ? 'default' : 'ghost'}
            className={`${
              activeTab === 'playground' 
                ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-500' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Play className="h-4 w-4 mr-2" />
            Code Playground
          </Button>
        </div>

        {/* Content */}
        {activeTab === 'lessons' ? (
          <LessonGrid completedLessons={completedLessons} />
        ) : (
          <CodePlayground />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
