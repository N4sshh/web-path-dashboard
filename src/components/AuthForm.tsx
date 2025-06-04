
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Sparkles, BookOpen, Zap } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface AuthFormProps {
  onLogin: (userData: { name: string; email: string }) => void;
}

const AuthForm = ({ onLogin }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Account created successfully!",
        description: "Welcome to CodeStarter. You can now log in.",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    // Simulate API call
    setTimeout(() => {
      onLogin({ name: 'John Doe', email });
      toast({
        title: "Welcome back!",
        description: "Successfully logged in to CodeStarter.",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="text-white space-y-8 lg:pr-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-yellow-400" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                CodeStarter
              </h1>
            </div>
            <h2 className="text-5xl font-bold leading-tight">
              Master Web Development
              <span className="block text-yellow-400">One Lesson at a Time</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Interactive lessons, hands-on coding, and real-time feedback to help you become a web developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <BookOpen className="h-6 w-6 text-blue-400" />
              <div>
                <div className="font-semibold">18 Lessons</div>
                <div className="text-sm text-slate-400">Comprehensive curriculum</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="h-6 w-6 text-green-400" />
              <div>
                <div className="font-semibold">Live Coding</div>
                <div className="text-sm text-slate-400">Interactive playground</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <div>
                <div className="font-semibold">Progress Tracking</div>
                <div className="text-sm text-slate-400">Monitor your growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* Auth Card */}
        <div className="w-full max-w-md mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white">Get Started</CardTitle>
              <CardDescription className="text-slate-300">
                Join thousands learning to code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/5">
                  <TabsTrigger value="login" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900">
                    Log In
                  </TabsTrigger>
                  <TabsTrigger value="register" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900">
                    Register
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-4 mt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-white">Email</Label>
                      <Input
                        id="login-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-yellow-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-white">Password</Label>
                      <Input
                        id="login-password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-yellow-400"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register" className="space-y-4 mt-6">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name" className="text-white">Full Name</Label>
                      <Input
                        id="register-name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-yellow-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-white">Email</Label>
                      <Input
                        id="register-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-yellow-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-white">Password</Label>
                      <Input
                        id="register-password"
                        name="password"
                        type="password"
                        placeholder="Create a password"
                        required
                        minLength={8}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-yellow-400"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
