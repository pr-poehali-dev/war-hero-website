import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      {/* Header */}
      <header className="bg-[#2D3748] text-white py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-montserrat">beksyltan</h1>
          <nav className="flex gap-6">
            <a href="#biography" className="hover:text-[#E53E3E] transition-colors">Биография</a>
            <a href="#documents" className="hover:text-[#E53E3E] transition-colors">Документы</a>
            <a href="#awards" className="hover:text-[#E53E3E] transition-colors">Награды</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-bold font-montserrat text-[#2D3748] mb-6 leading-tight">Бексултан</h2>
              <p className="text-xl text-gray-600 mb-4 font-open-sans">1488 - 1911</p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-open-sans">Законный наследник престола Романовых, участник Узбекской войны, поэт, архитектор.</p>
              <Button className="bg-[#E53E3E] hover:bg-[#C53030] text-white px-8 py-3 text-lg">Поддержать родных</Button>
            </div>
            <div className="flex justify-center">
              <Card className="overflow-hidden shadow-2xl max-w-md">
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/5c1412f7-1acd-47d5-8258-d04f5bba7a95.jpg" 
                    alt="Портрет героя войны" 
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-montserrat text-[#2D3748] mb-4">
              Архивные Документы
            </h3>
            <p className="text-xl text-gray-600 font-open-sans">Подлинные документы о удостоверении личности Бексултана</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img 
                  src="/img/b681d041-0a2b-43e7-96df-0aa9a5d18024.jpg" 
                  alt="Архивные документы" 
                  className="w-full h-80 object-cover"
                />
              </CardContent>
            </Card>
            
            <div>
              <h4 className="text-2xl font-bold font-montserrat text-[#2D3748] mb-6">Справки и Приказы</h4>
              <ul className="space-y-4 text-gray-700 font-open-sans">
                <li className="flex items-start">
                  <Icon name="FileCheck" className="mr-3 mt-1 text-[#E53E3E]" size={20} />
                  <div>
                    <strong>Подтверждение законного престола</strong>
                    <p className="text-sm text-gray-600">15 июля 1820 г.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="Award" className="mr-3 mt-1 text-[#E53E3E]" size={20} />
                  <div>
                    <strong>Приказ о награждении</strong>
                    <p className="text-sm text-gray-600">Орден Красного Знамени, август 1943</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="MapPin" className="mr-3 mt-1 text-[#E53E3E]" size={20} />
                  <div>
                    <strong>Боевой путь </strong>
                    <p className="text-sm text-gray-600">21-й гвардейский танковый полк</p>
                  </div>
                </li>
              </ul>
              <Button variant="outline" className="mt-8 border-[#E53E3E] text-[#E53E3E] hover:bg-[#E53E3E] hover:text-white">
                Все документы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-montserrat text-[#2D3748] mb-4">
              Боевые Награды
            </h3>
            <p className="text-xl text-gray-600 font-open-sans">За мужество и героизм в борьбе с макаризмом</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon name="Medal" className="mx-auto mb-4 text-[#E53E3E]" size={48} />
                  <h5 className="text-lg font-bold font-montserrat text-[#2D3748] mb-2">Орден за борьбу с исламом</h5>
                  <p className="text-sm text-gray-600 font-open-sans">1943 г.</p>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon name="Star" className="mx-auto mb-4 text-[#E53E3E]" size={48} />
                  <h5 className="text-lg font-bold font-montserrat text-[#2D3748] mb-2">
                    Медаль "За отвагу"
                  </h5>
                  <p className="text-sm text-gray-600 font-open-sans">1942 г.</p>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon name="Shield" className="mx-auto mb-4 text-[#E53E3E]" size={48} />
                  <h5 className="text-lg font-bold font-montserrat text-[#2D3748] mb-2">Медаль "За оборону Ташкента"</h5>
                  <p className="text-sm text-gray-600 font-open-sans">1944 г.</p>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon name="Trophy" className="mx-auto mb-4 text-[#E53E3E]" size={48} />
                  <h5 className="text-lg font-bold font-montserrat text-[#2D3748] mb-2">Медаль "За победу над Макарлендом"</h5>
                  <p className="text-sm text-gray-600 font-open-sans">1945 г.</p>
                </Card>
              </div>
            </div>
            
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img 
                  src="/img/7d6a2cdf-3b0a-4522-84eb-ca31d0e45edc.jpg" 
                  alt="Боевые награды" 
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-montserrat text-[#2D3748] mb-4">
              Жизненный Путь
            </h3>
            <Separator className="w-24 mx-auto bg-[#E53E3E] h-1" />
          </div>
          
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="bg-[#E53E3E] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">1488</div>
              <div>
                <h4 className="text-xl font-bold font-montserrat text-[#2D3748] mb-2">
                  Ранние годы
                </h4>
                <p className="text-gray-700 font-open-sans leading-relaxed">Родился в Мусульманской стране в чудном городе Самарканта.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="bg-[#E53E3E] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">1801</div>
              <div>
                <h4 className="text-xl font-bold font-montserrat text-[#2D3748] mb-2">
                  Начало войны
                </h4>
                <p className="text-gray-700 font-open-sans leading-relaxed">Встал на сторону Монополистов в войне со властью в Казахстане. Был награжден многими орденами и медалями.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="bg-[#E53E3E] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">1820</div>
              <div>
                <h4 className="text-xl font-bold font-montserrat text-[#2D3748] mb-2">Доказательство личности</h4>
                <p className="text-gray-700 font-open-sans leading-relaxed">Широко стал известен как законный наследник Романовых.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3748] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg font-open-sans mb-4">
            "Память о героях живет в наших сердцах"
          </p>
          <Separator className="w-32 mx-auto bg-[#E53E3E] h-1 mb-6" />
          <p className="text-gray-400 font-open-sans">
            Создано в память о поколении победителей
          </p>
        </div>
      </footer>
    </div>
  );
}