import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [email, setEmail] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleGetCode = async () => {
    if (!validateEmail(email)) {
      toast({
        title: "Неверный email",
        description: "Пожалуйста, введите корректный email адрес",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Имитация отправки
    setTimeout(() => {
      setShowCode(true);
      setIsLoading(false);
      toast({
        title: "Код отправлен!",
        description: `Код отправлен на ${email}`,
      });
    }, 1500);
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
            Получите код активации на свой email
          </p>
        </div>

        {/* Main Card */}
        <Card className="border-0 shadow-xl shadow-sky-100/50 hover-scale">
          <CardContent className="p-8 space-y-6">
            {!showCode ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 block">
                    Email адрес
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleGetCode()}
                    className="h-12 text-base"
                  />
                </div>
                
                <Button 
                  onClick={handleGetCode}
                  disabled={isLoading}
                  className="w-full h-12 text-base font-medium bg-sky-500 hover:bg-sky-600"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Отправка...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Icon name="Send" size={18} />
                      Получить код
                    </div>
                  )}
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
                    Код отправлен на {email}
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
                    onClick={() => {
                      setShowCode(false);
                      setEmail('');
                    }}
                    variant="outline"
                    className="flex-1 h-11"
                  >
                    <Icon name="RotateCcw" size={16} className="mr-2" />
                    Новый запрос
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
            <span>Безопасная передача данных</span>
          </div>
          <p className="text-xs text-slate-400">
            Код действителен для активации Windows CFMOT
          </p>
        </div>
      </div>
    </div>
  );
}
