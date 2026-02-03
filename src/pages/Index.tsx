import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [showCode, setShowCode] = useState(false);
  const { toast } = useToast();

  const handleGetCode = () => {
    setShowCode(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('23235533');
    toast({
      title: "Скопировано!",
      description: "Код скопирован в буфер обмена",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-500 rounded-2xl mb-4">
            <Icon name="KeyRound" size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            Windows CFMOT
          </h1>
          <p className="text-slate-600 text-lg">
            Получите код активации одним нажатием
          </p>
        </div>

        {/* Main Card */}
        <Card className="border-0 shadow-xl shadow-sky-100/50 hover-scale">
          <CardContent className="p-8 space-y-6">
            {!showCode ? (
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-50 rounded-full">
                    <Icon name="Lock" size={40} className="text-sky-500" />
                  </div>
                  <p className="text-slate-600">
                    Нажмите кнопку, чтобы получить<br />код активации Windows CFMOT
                  </p>
                </div>
                
                <Button 
                  onClick={handleGetCode}
                  size="lg"
                  className="w-full h-14 text-lg font-medium bg-sky-500 hover:bg-sky-600"
                >
                  <Icon name="Key" size={20} className="mr-2" />
                  Получить код
                </Button>
              </div>
            ) : (
              <div className="space-y-6 animate-scale-in">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-2">
                    <Icon name="Check" size={28} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Код активации
                  </h2>
                  <p className="text-slate-600">
                    Используйте этот код для активации
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                  <div className="text-center space-y-3">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                      Ваш код
                    </p>
                    <p className="text-5xl font-bold text-slate-900 tracking-wider font-mono">
                      23235533
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleCopyCode}
                    variant="outline"
                    className="flex-1 h-11"
                  >
                    <Icon name="Copy" size={16} className="mr-2" />
                    Скопировать
                  </Button>
                  <Button
                    onClick={() => setShowCode(false)}
                    variant="outline"
                    className="flex-1 h-11"
                  >
                    <Icon name="RotateCcw" size={16} className="mr-2" />
                    Скрыть код
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="text-center space-y-2 px-4">
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Icon name="Shield" size={16} />
            <span>Безопасное получение кода</span>
          </div>
          <p className="text-xs text-slate-400">
            Код действителен для активации Windows CFMOT
          </p>
        </div>
      </div>
    </div>
  );
}
