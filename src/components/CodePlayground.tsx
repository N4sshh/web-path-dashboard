
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Code, Play, RotateCcw, Download, Share } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CodePlayground = () => {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to CodeStarter!</h1>
    <p>Start editing the HTML and CSS to see your changes.</p>
    <button>Click me!</button>
</body>
</html>`);

  const [cssCode, setCssCode] = useState(`body {
    font-family: 'Arial', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 100vh;
}

h1 {
    color: #FFD700;
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 20px;
}

p {
    font-size: 1.2em;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 30px;
}

button {
    display: block;
    margin: 0 auto;
    padding: 12px 24px;
    background: #FFD700;
    color: #333;
    border: none;
    border-radius: 25px;
    font-size: 1.1em;
    cursor: pointer;
    transition: transform 0.2s;
}

button:hover {
    transform: scale(1.05);
}`);

  const [previewKey, setPreviewKey] = useState(0);

  const runCode = () => {
    setPreviewKey(prev => prev + 1);
    toast({
      title: "Code updated!",
      description: "Your changes are now visible in the preview.",
    });
  };

  const resetCode = () => {
    setHtmlCode(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to CodeStarter!</h1>
    <p>Start editing the HTML and CSS to see your changes.</p>
    <button>Click me!</button>
</body>
</html>`);
    setCssCode(`body {
    font-family: 'Arial', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 100vh;
}

h1 {
    color: #FFD700;
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 20px;
}

p {
    font-size: 1.2em;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 30px;
}

button {
    display: block;
    margin: 0 auto;
    padding: 12px 24px;
    background: #FFD700;
    color: #333;
    border: none;
    border-radius: 25px;
    font-size: 1.1em;
    cursor: pointer;
    transition: transform 0.2s;
}

button:hover {
    transform: scale(1.05);
}`);
    setPreviewKey(prev => prev + 1);
    toast({
      title: "Code reset!",
      description: "The playground has been reset to the default code.",
    });
  };

  const shareCode = () => {
    navigator.clipboard.writeText(`HTML:\n${htmlCode}\n\nCSS:\n${cssCode}`);
    toast({
      title: "Code copied!",
      description: "Your code has been copied to the clipboard.",
    });
  };

  const combinedCode = `
    <style>${cssCode}</style>
    ${htmlCode}
  `;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Live Code Editor</h3>
          <p className="text-slate-300">Experiment with HTML and CSS in real-time</p>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={runCode}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Play className="h-4 w-4 mr-2" />
            Run Code
          </Button>
          <Button
            onClick={resetCode}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button
            onClick={shareCode}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Code className="h-5 w-5 mr-2" />
              Code Editor
            </CardTitle>
            <CardDescription className="text-slate-300">
              Write your HTML and CSS code here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="html" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/5">
                <TabsTrigger value="html" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  HTML
                </TabsTrigger>
                <TabsTrigger value="css" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  CSS
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="html" className="mt-4">
                <Textarea
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  className="min-h-[400px] font-mono text-sm bg-slate-900/50 border-white/20 text-white resize-none"
                  placeholder="Enter your HTML code here..."
                />
              </TabsContent>
              
              <TabsContent value="css" className="mt-4">
                <Textarea
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  className="min-h-[400px] font-mono text-sm bg-slate-900/50 border-white/20 text-white resize-none"
                  placeholder="Enter your CSS code here..."
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Preview */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Live Preview</CardTitle>
            <CardDescription className="text-slate-300">
              See your code in action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4 min-h-[400px] overflow-auto">
              <iframe
                key={previewKey}
                srcDoc={combinedCode}
                className="w-full h-[400px] border-0"
                title="Code Preview"
                sandbox="allow-scripts"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tips Section */}
      <Card className="bg-white/10 backdrop-blur-lg border-white/20">
        <CardHeader>
          <CardTitle className="text-white">💡 Quick Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-300">
            <div className="space-y-2">
              <h4 className="font-semibold text-yellow-400">HTML Basics</h4>
              <ul className="text-sm space-y-1">
                <li>• Use semantic tags like &lt;header&gt;, &lt;main&gt;, &lt;footer&gt;</li>
                <li>• Always include alt text for images</li>
                <li>• Structure content with headings (h1-h6)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-400">CSS Styling</h4>
              <ul className="text-sm space-y-1">
                <li>• Use flexbox or grid for layouts</li>
                <li>• Add hover effects for interactivity</li>
                <li>• Use relative units (em, rem, %)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-green-400">Best Practices</h4>
              <ul className="text-sm space-y-1">
                <li>• Keep your code clean and organized</li>
                <li>• Use meaningful class names</li>
                <li>• Test on different screen sizes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodePlayground;
