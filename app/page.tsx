import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { 
  Stethoscope, 
  Heart, 
  Users, 
  Calendar, 
  MessageCircle, 
  Instagram, 
  Facebook,
  BookOpen,
  GraduationCap,
  Zap,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Activity,
  Brain,
  Leaf,
  Menu,
  Home,
  Stethoscope as StethoscopeIcon,
  Building
} from "lucide-react";

export default function YuanQiClinic() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">元氣醫館</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-6">
                <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">關於我們</a>
                <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">服務項目</a>
                <a href="#articles" className="text-sm font-medium hover:text-primary transition-colors">健康文章</a>
                <a href="#lectures" className="text-sm font-medium hover:text-primary transition-colors">講座合作</a>
              </div>
              <ThemeToggle />
              <Button asChild>
                <a href="https://wa.me/852XXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  立即預約
                </a>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center space-x-2">
              <ThemeToggle />
              <Button asChild size="sm">
                <a href="https://wa.me/852XXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">開啟選單</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <StethoscopeIcon className="h-6 w-6 text-primary" />
                      元氣醫館
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex flex-col space-y-4 mt-6">
                    <Button variant="ghost" asChild className="justify-start h-12 text-left">
                      <a href="#about" className="flex items-center gap-3">
                        <Home className="h-5 w-5" />
                        <span>關於我們</span>
                      </a>
                    </Button>
                    
                    <Button variant="ghost" asChild className="justify-start h-12 text-left">
                      <a href="#services" className="flex items-center gap-3">
                        <Activity className="h-5 w-5" />
                        <span>服務項目</span>
                      </a>
                    </Button>
                    
                    <Button variant="ghost" asChild className="justify-start h-12 text-left">
                      <a href="#articles" className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5" />
                        <span>健康文章</span>
                      </a>
                    </Button>
                    
                    <Button variant="ghost" asChild className="justify-start h-12 text-left">
                      <a href="#lectures" className="flex items-center gap-3">
                        <GraduationCap className="h-5 w-5" />
                        <span>講座合作</span>
                      </a>
                    </Button>
                    
                    <Separator className="my-4" />
                    
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <a href="https://wa.me/852XXXXXXXX" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp 預約
                      </a>
                    </Button>
                    
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <Button variant="outline" asChild size="sm">
                        <a href="https://www.instagram.com/yuanqi_cmc/" target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" asChild size="sm">
                        <a href="https://www.facebook.com/p/%E5%85%83%E6%B0%A3%E9%86%AB%E9%A4%A8-61566864584309/" target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 min-h-screen flex items-center bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image - Show first on mobile */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-md h-96 rounded-lg overflow-hidden">
        <Image
                  src="/image/cat.jpg"
                  alt="Cats by the window"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
          priority
        />
              </div>
            </div>
            
            {/* Left Side - Content */}
            <div className="text-left order-2 lg:order-1">
              
              {/* Dynamic Title */}
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                元氣醫館
              </h2>
              
              {/* Animated Subtitle */}
              <div className="relative mb-8">
                <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-bold">
                  專業中醫診所
                </p>
                <div className="flex items-center gap-2 text-lg text-primary font-semibold">
                  <Shield className="h-5 w-5 animate-pulse text-primary" />
                  <span>守護您的健康與元氣</span>
                  <Shield className="h-5 w-5 animate-pulse delay-500 text-primary" />
                </div>
              </div>
              
              {/* Interactive Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl">
                <div className="group hover:scale-105 transition-transform duration-300 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border shadow-sm">
                  <div className="text-3xl font-bold text-primary group-hover:text-blue-500 transition-colors">15+</div>
                  <div className="text-sm text-muted-foreground font-semibold">年經驗</div>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border shadow-sm">
                  <div className="text-3xl font-bold text-primary group-hover:text-purple-500 transition-colors">5000+</div>
                  <div className="text-sm text-muted-foreground font-semibold">治癒案例</div>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border shadow-sm">
                  <div className="text-3xl font-bold text-primary group-hover:text-green-500 transition-colors">98%</div>
                  <div className="text-sm text-muted-foreground font-semibold">滿意度</div>
                </div>
              </div>
              
              {/* Animated CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group hover:scale-105 transition-all duration-300">
                  <a href="https://wa.me/852XXXXXXXX" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 group-hover:animate-bounce" />
                    WhatsApp 預約
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="group hover:scale-105 transition-all duration-300 border-2 hover:bg-primary hover:text-primary-foreground">
                  <a href="#about" className="flex items-center gap-2">
                    <Star className="h-4 w-4 group-hover:animate-spin" />
                    了解更多
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-primary animate-pulse" />
              <Badge variant="outline" className="text-sm">專業認證</Badge>
              <Award className="h-6 w-6 text-primary animate-pulse delay-500" />
            </div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              關於元氣醫館
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              我們是一間專業的中醫診所，致力於為患者提供最優質的醫療服務。
              結合傳統中醫智慧與現代醫療技術，為您的健康保駕護航。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Professional Medical */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                  <CardHeader className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Heart className="h-6 w-6 text-primary group-hover:animate-pulse" />
                        </div>
                        <CardTitle className="text-xl">專業醫療</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        擁有豐富臨床經驗的專業中醫師團隊，傳承千年中醫智慧
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>15年+ 臨床經驗</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>專業中醫執照</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>持續進修學習</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold">專業團隊</h4>
                  <p className="text-sm text-muted-foreground">
                    我們的醫師團隊均具備豐富的臨床經驗，定期參加專業培訓，
                    確保為患者提供最優質的醫療服務。
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Card 2 - Patient Care */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="group hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-pink-500/50">
                  <CardHeader className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-full bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                          <Users className="h-6 w-6 text-pink-500 group-hover:animate-bounce" />
                        </div>
                        <CardTitle className="text-xl">貼心服務</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        以患者為中心，提供個性化的醫療服務與關懷
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>一對一診療</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>個性化方案</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>全程跟進</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold">患者至上</h4>
                  <p className="text-sm text-muted-foreground">
                    我們相信每個患者都是獨特的，因此提供個性化的治療方案，
                    並全程跟進治療效果，確保最佳療效。
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Card 3 - Easy Booking */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-blue-500/50">
                  <CardHeader className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                          <Calendar className="h-6 w-6 text-blue-500 group-hover:animate-pulse" />
                        </div>
                        <CardTitle className="text-xl">便捷預約</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        透過 WhatsApp 輕鬆預約，節省您的寶貴時間
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-blue-500" />
                        <span>24/7 預約</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-blue-500" />
                        <span>即時回覆</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-blue-500" />
                        <span>靈活時間</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold">隨時預約</h4>
                  <p className="text-sm text-muted-foreground">
                    透過 WhatsApp 隨時預約，我們會即時回覆並安排最適合的時間，
                    讓您享受便捷的預約體驗。
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Doctor Introduction Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="h-6 w-6 text-primary animate-pulse" />
              <Badge variant="outline" className="text-sm">專業團隊</Badge>
              <Users className="h-6 w-6 text-primary animate-pulse delay-500" />
            </div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              醫師介紹
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              我們的專業醫師團隊擁有豐富的臨床經驗，致力於為每位患者提供最優質的中醫醫療服務
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Doctor 1 */}
            <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-blue-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative text-center pb-4">
                <div className="relative mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Users className="h-16 w-16 text-blue-500" />
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">冼建移</CardTitle>
                <CardDescription className="text-base font-medium text-blue-600">
                  主任中醫師
                </CardDescription>
              </CardHeader>
              <CardContent className="relative text-center">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">15年臨床經驗</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-green-500" />
                    <span className="font-medium">中醫大學博士</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">專科：內科調理</span>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    專精於內科疾病的中醫調理，擅長感冒咳嗽、腸胃不適、失眠等常見疾病的治療，
                    以溫和有效的方式幫助患者恢復健康。
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    <Badge variant="secondary" className="text-xs">感冒咳嗽</Badge>
                    <Badge variant="secondary" className="text-xs">腸胃調理</Badge>
                    <Badge variant="secondary" className="text-xs">失眠治療</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Doctor 2 */}
            <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-purple-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative text-center pb-4">
                <div className="relative mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-purple-500" />
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">劉敏怡</CardTitle>
                <CardDescription className="text-base font-medium text-purple-600">
                  資深中醫師
                </CardDescription>
              </CardHeader>
              <CardContent className="relative text-center">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">12年臨床經驗</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-green-500" />
                    <span className="font-medium">中醫碩士學位</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">專科：婦科調理</span>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    專精於婦科疾病的中醫調理，擅長月經不調、更年期症狀、備孕調理等女性健康問題，
                    以細心專業的態度為女性患者提供貼心服務。
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    <Badge variant="secondary" className="text-xs">月經調理</Badge>
                    <Badge variant="secondary" className="text-xs">更年期</Badge>
                    <Badge variant="secondary" className="text-xs">備孕調理</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild className="group hover:scale-105 transition-all duration-300">
              <a href="https://wa.me/852XXXXXXXX" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 group-hover:animate-bounce" />
                預約醫師診療
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary animate-pulse" />
              <Badge variant="outline" className="text-sm">專業服務</Badge>
              <Activity className="h-6 w-6 text-primary animate-pulse delay-500" />
            </div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-green-500 to-blue-600 bg-clip-text text-transparent">
              服務項目
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              提供全面的中醫醫療服務，涵蓋各種常見疾病與健康調理。
              每個服務都經過精心設計，為您的健康保駕護航。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Internal Medicine */}
            <Card className="group hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-3 cursor-pointer border-2 hover:border-green-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                    <Brain className="h-8 w-8 text-green-500 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-green-600 transition-colors">內科調理</CardTitle>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  針對各種內科疾病進行中醫調理與治療，從根本解決健康問題
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">治療效果</span>
                    <span className="text-sm text-green-600 font-semibold">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm group-hover:text-green-600 transition-colors">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>感冒咳嗽</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm group-hover:text-green-600 transition-colors">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>腸胃不適</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm group-hover:text-green-600 transition-colors">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>失眠焦慮</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 2 - Gynecology */}
            <Card className="group hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-3 cursor-pointer border-2 hover:border-pink-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                    <Heart className="h-8 w-8 text-pink-500 group-hover:animate-bounce" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-pink-600 transition-colors">婦科調理</CardTitle>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  專業婦科中醫調理，關注女性健康，提供貼心的醫療服務
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">治療效果</span>
                    <span className="text-sm text-pink-600 font-semibold">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm group-hover:text-pink-600 transition-colors">
                      <CheckCircle className="h-4 w-4 text-pink-500" />
                      <span>月經不調</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm group-hover:text-pink-600 transition-colors">
                      <CheckCircle className="h-4 w-4 text-pink-500" />
                      <span>更年期</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm group-hover:text-pink-600 transition-colors">
                      <CheckCircle className="h-4 w-4 text-pink-500" />
                      <span>備孕調理</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 3 - Acupuncture */}
            <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3 cursor-pointer border-2 hover:border-blue-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Zap className="h-8 w-8 text-blue-500 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">針灸治療</CardTitle>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  傳統針灸療法，緩解疼痛與各種症狀，安全有效的治療方式
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">治療效果</span>
                    <span className="text-sm text-blue-600 font-semibold">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm group-hover:text-blue-600 transition-colors">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>頸肩腰腿痛</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm group-hover:text-blue-600 transition-colors">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>頭痛</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm group-hover:text-blue-600 transition-colors">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>面癱</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary animate-pulse" />
              <Badge variant="outline" className="text-sm">健康知識</Badge>
              <Leaf className="h-6 w-6 text-primary animate-pulse delay-500" />
            </div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-green-500 to-emerald-600 bg-clip-text text-transparent">
              健康文章
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              分享中醫養生知識，幫助您更好地了解健康與疾病預防。
              每篇文章都經過專業醫師審核，為您的健康保駕護航。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Header */}
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  中醫養生之道
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Traditional Chinese Medicine
                </CardDescription>
              </CardHeader>
              
              {/* Content */}
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  了解中醫養生的基本原理與日常保健方法，讓健康成為生活的一部分。中醫養生強調順應自然，調和陰陽...
                </p>
                
                {/* Read More */}
                <Button variant="ghost" size="sm" className="w-full group-hover:text-primary transition-colors">
                  閱讀更多
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-5xl font-bold text-gray-700">≫</div>
              </div>
              
              {/* Header */}
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  季節養生指南
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Seasonal Health Guide
                </CardDescription>
              </CardHeader>
              
              {/* Content */}
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  根據不同季節的特點，提供相應的養生建議，順應自然規律。四季養生是中醫的重要理論...
                </p>
                
                {/* Read More */}
                <Button variant="ghost" size="sm" className="w-full group-hover:text-primary transition-colors">
                  閱讀更多
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center border-4 border-white">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Header */}
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  疾病預防指南
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Disease Prevention
                </CardDescription>
              </CardHeader>
              
              {/* Content */}
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  學習如何預防常見疾病，保持身體健康，提高生活品質。預防勝於治療...
                </p>
                
                {/* Read More */}
                <Button variant="ghost" size="sm" className="w-full group-hover:text-primary transition-colors">
                  閱讀更多
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lectures Section */}
      <section id="lectures" className="py-20 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary animate-pulse" />
              <Badge variant="outline" className="text-sm">講座合作</Badge>
              <GraduationCap className="h-6 w-6 text-primary animate-pulse delay-500" />
            </div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              機構講座與合作
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              元氣醫館積極與各大機構合作，舉辦中醫健康講座，分享養生知識，
              提升大眾健康意識。歡迎各界洽談合作！
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Enterprise Package */}
            <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-blue-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Header with Icon and Badge */}
              <CardHeader className="relative text-center pb-4">
                <div className="relative mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="absolute top-4 right-4 text-xs">企業專用</Badge>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">企業健康講座</CardTitle>
                <CardDescription className="text-base font-medium text-blue-600">
                  為企業員工提供中醫養生與健康管理講座
                </CardDescription>
              </CardHeader>

              {/* Pricing */}
              <div className="relative px-6 pb-4">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-foreground">HK$ 2,500</span>
                  <span className="text-sm text-muted-foreground ml-2">/ 場次</span>
                </div>
              </div>

              {/* Features */}
              <CardContent className="relative">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">辦公室常見健康問題</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">中醫養生與壓力管理</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">飲食調理與營養保健</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">運動養生與穴位按摩</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">現場健康諮詢服務</span>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* CTA Button */}
                <Button className="w-full group-hover:bg-blue-600 transition-colors" asChild>
                  <a href="https://wa.me/852XXXXXXXX" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    立即預約
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Community Package */}
            <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-purple-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Header with Icon and Badge */}
              <CardHeader className="relative text-center pb-4">
                <div className="relative mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="absolute top-4 right-4 text-xs">社區專用</Badge>
                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">社區健康推廣</CardTitle>
                <CardDescription className="text-base font-medium text-purple-600">
                  在社區舉辦中醫健康知識普及活動
                </CardDescription>
              </CardHeader>

              {/* Pricing */}
              <div className="relative px-6 pb-4">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-foreground">HK$ 1,800</span>
                  <span className="text-sm text-muted-foreground ml-2">/ 場次</span>
                </div>
              </div>

              {/* Features */}
              <CardContent className="relative">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">中醫基礎理論介紹</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">常見疾病預防與調理</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">中藥材知識與應用</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">健康生活方式指導</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">免費健康諮詢</span>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* CTA Button */}
                <Button className="w-full group-hover:bg-purple-600 transition-colors" asChild>
                  <a href="https://wa.me/852XXXXXXXX" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    立即預約
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-border">
              <h4 className="text-lg font-semibold mb-3 text-foreground">合作優勢</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>專業醫師主講</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>靈活時間安排</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>客製化內容</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">聯繫我們</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            歡迎透過以下方式與我們聯繫，我們將竭誠為您服務
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild className="group hover:scale-105 transition-all duration-300">
              <a href="https://wa.me/852XXXXXXXX" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp 預約
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.instagram.com/yuanqi_cmc/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.facebook.com/p/%E5%85%83%E6%B0%A3%E9%86%AB%E9%A4%A8-61566864584309/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>營業時間：週一至週六 9:00-18:00</p>
            <p>地址：香港 [具體地址]</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Stethoscope className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">元氣醫館</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 元氣醫館. 專業中醫診所，守護您的健康與元氣
          </p>
        </div>
      </footer>
    </div>
  );
}
