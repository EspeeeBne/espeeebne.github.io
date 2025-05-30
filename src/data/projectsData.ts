export interface Project {
    slug: string;
    name: string;
    description: string;
    date: string;
    imageUrl: string;
}

const projectsData: Project[] = [
    {
        "name": ".net-9.0-back-end-ve-react-front-end-su-takip-uygulamasi-full-stack",
        "description": ".net 9.0 ile alakalı bir repository atacağımı söylemiştim proje adımız suyu seviyorum diye suyu çok severim grafikler var kullanıcı girişi var kullanıcıya özel su ekleme var günlük haftalık aylık yıllık grafik var öyle çalıştırmak için readme.md okuyun",
        "date": "2024-11-30",
        "slug": ".net-9.0-back-end-ve-react-front-end-su-takip-uygulamasi-full-stack",
        "imageUrl": "/static/projects/.net-9.0-back-end-ve-react-front-end-su-takip-uygulamasi-full-stack/logo.png"
    },
    {
        "name": "ASP.NET-Core-Saya-Uygulamas---Responsive-Temal-",
        "description": "evet bu repository'imde asp.net kullanarak site yaptım c# biliyorum diye kendime kanıtlamak için responsive yaptım birde projeyi açmak için .net 7.0 olmalı bilgisayarınızda sonra visiual stuido 2022'den sayac.sln dosyasını açıp f11 basarsanız açılır ",
        "date": "2024-11-21",
        "slug": "ASP.NET-Core-Saya-Uygulamas---Responsive-Temal-",
        "imageUrl": "/static/projects/ASP.NET-Core-Saya-Uygulamas---Responsive-Temal-/logo.png"
    },
    {
        "name": "c-hesap-makinesi",
        "description": "Merhaba bu ilk repository'im c#'dı ama github # kelimesini filtreledi diye proje adı c hesap makinesi oldu bende gerçekten c üzerinde yazıp öyle atayım dedim öyle yaptım başlatmak için .sln dosyasına tıklayıp (vs 2022 kuruluysa) açıp f11 basmanız yeterli olur",
        "date": "2024-10-16",
        "slug": "c-hesap-makinesi",
        "imageUrl": "/static/projects/c-hesap-makinesi/logo.png"
    },
    {
        "name": "codeacademy-nin-0dan-kodla-dedigi-Build-a-Website-Design-System-projesinin-kaynak-kodlari",
        "description": "html ve css var sadece çalıştırması çok basit ondan hem üniversite sertifikam olsun hemde okurken daha rahat okuyayım hocalara full stack web developer sertifikam var diyeyim diye codeacademy'e kayıt oldum yanlış anlamayın kodu çalıştırmak için index.html dosyyasına sol tıklamanız yeter",
        "date": "2024-11-05",
        "slug": "codeacademy-nin-0dan-kodla-dedigi-Build-a-Website-Design-System-projesinin-kaynak-kodlari",
        "imageUrl": "/static/projects/codeacademy-nin-0dan-kodla-dedigi-Build-a-Website-Design-System-projesinin-kaynak-kodlari/logo.png"
    },
    {
        "name": "codeacademynin-0dan-kodla-dedigi-Company-Home-Page-with-Flexbox-benim-tarafimdan-olan-kaynak-kodlari",
        "description": "tamam bu biraz sadece html ve css için gereksiz iyi olmuş olabilir ama ne yapayım aklımdan geldiğince doldurdum hayali zaten bir firmaya ait değil index.html'i açın diğer yerlere navbar ile erişiliyor",
        "date": "2024-11-07",
        "slug": "codeacademynin-0dan-kodla-dedigi-Company-Home-Page-with-Flexbox-benim-tarafimdan-olan-kaynak-kodlari",
        "imageUrl": "/static/projects/codeacademynin-0dan-kodla-dedigi-Company-Home-Page-with-Flexbox-benim-tarafimdan-olan-kaynak-kodlari/logo.png"
    },
    {
        "name": "codeacademynin-0dan-kodlayin-dedigi-Responsive-Club-Websitenin-benim-tarafimdan-yazilmis-kodlari",
        "description": "Merhaba bu repostiry beni biraz zorladı slider eklemek istedim ama daha eğitimin başlarındayım diye sadece html ve css vardı js dosyası olmuyordu ben react gibi daha kolay gelen dillerde daha iyiyim ilk defa html içinde script kullandım ve biraz hatalı olabilir doğal olarak index.html'i açmanız yeterli açmak isterseniz",
        "date": "2024-11-07",
        "slug": "codeacademynin-0dan-kodlayin-dedigi-Responsive-Club-Websitenin-benim-tarafimdan-yazilmis-kodlari",
        "imageUrl": "/static/projects/codeacademynin-0dan-kodlayin-dedigi-Responsive-Club-Websitenin-benim-tarafimdan-yazilmis-kodlari/logo.png"
    },
    {
        "name": "codeacademynin-0dan-kodlayin-dedigi-Tea-Cozynin-benim-tarafimdan-yazilmis-kaynak-kodlari",
        "description": "biliyorum css kodunu biraz uzun yaptım bu projenin nasıl olması gerektiğini diyor codeacademy ama içim rahat etmedi böyle yaptım açması basit resimler yoksa çalışmaz ama düzgün haberiniz olsun html dosyasına sol tıklamanız yeterli açılması için",
        "date": "2024-11-06",
        "slug": "codeacademynin-0dan-kodlayin-dedigi-Tea-Cozynin-benim-tarafimdan-yazilmis-kaynak-kodlari",
        "imageUrl": "/static/projects/codeacademynin-0dan-kodlayin-dedigi-Tea-Cozynin-benim-tarafimdan-yazilmis-kaynak-kodlari/logo.png"
    },
    {
        "name": "codeacademynin-bazi-seyleri-vereyim-sen-kodla-dedigi-Adopt-a-Pet-in-kendimce-yazilmis-kaynak-kodlari",
        "description": "evet taskları tamamlamak çok uzun sürdü hepsini toplu söyleseler keşke neyse çalıştırmak için nodejs kurmalısınız sonrasında npm install deyip npm start derseniz cmd'ye açılır ",
        "date": "2024-11-12",
        "slug": "codeacademynin-bazi-seyleri-vereyim-sen-kodla-dedigi-Adopt-a-Pet-in-kendimce-yazilmis-kaynak-kodlari",
        "imageUrl": "/static/projects/codeacademynin-bazi-seyleri-vereyim-sen-kodla-dedigi-Adopt-a-Pet-in-kendimce-yazilmis-kaynak-kodlari/logo.png"
    },
    {
        "name": "codeacademynin-birazini-vereeyim-sen-yap-deidigi-react-ve-redux-kullanan-flashcardsin-kaynak-kodlari",
        "description": "merhaba codeacademy maceramıza devam gene redux öğretiyordu son dersiydi gene bir proje verdi yaptım ve kendimce eklemeler de yaptım projeyi açmak için node indirmelisiniz sonrasında dosya konumuna cmd açıp npm install deyip npm start demelisiniz",
        "date": "2024-11-14",
        "slug": "codeacademynin-birazini-vereeyim-sen-yap-deidigi-react-ve-redux-kullanan-flashcardsin-kaynak-kodlari",
        "imageUrl": "/static/projects/codeacademynin-birazini-vereeyim-sen-yap-deidigi-react-ve-redux-kullanan-flashcardsin-kaynak-kodlari/logo.png"
    },
    {
        "name": "codeacademynin-kismen-0dan-yazin-dedigi-Appointment-Plannerin-benim-tarafimdan-yazilan-kodlari",
        "description": "saat 6 olmuş biraz uykuluyum sadece kodladım belki hatalar olmuş olabilir özür dilerim şimdiden projeyi çalıştırmak için nodejs kurmalısınız sonrasında npm install npm start demelisiniz cmd'ye",
        "date": "2024-11-12",
        "slug": "codeacademynin-kismen-0dan-yazin-dedigi-Appointment-Plannerin-benim-tarafimdan-yazilan-kodlari",
        "imageUrl": "/static/projects/codeacademynin-kismen-0dan-yazin-dedigi-Appointment-Plannerin-benim-tarafimdan-yazilan-kodlari/logo.png"
    },
    {
        "name": "codecademy-nin-0-dan-kodlay-n-dedi-i-Build-Your-Own-Cheat-Sheet-yazd-m-kaynak-kodlar-",
        "description": "sadece html ve css kullandığım için biraz kötü olmuş olabilir codeacademy öyle istiyordu kusura bakmayın responsive değil biraz html dosyasını açsanız yeter direkt açılır ek bir şey kurmaya gerek kalmıyor",
        "date": "2024-11-04",
        "slug": "codecademy-nin-0-dan-kodlay-n-dedi-i-Build-Your-Own-Cheat-Sheet-yazd-m-kaynak-kodlar-",
        "imageUrl": "/static/projects/codecademy-nin-0-dan-kodlay-n-dedi-i-Build-Your-Own-Cheat-Sheet-yazd-m-kaynak-kodlar-/logo.png"
    },
    {
        "name": "csharp-hesap-makinesi",
        "description": "Merhaba buda c# hesap makinesi ilk projemdi ama c# yazılmıyor diye proje adlarına c oluyor otomatik diye bunu buraya taşıyıp oraya c ile yazılmış hesap makinesi koydum başlatması basit f11 basın .sln'i açıp vs(2022)'yi kullanıyorsanız öyle",
        "date": "2024-12-05",
        "slug": "csharp-hesap-makinesi",
        "imageUrl": "/static/projects/csharp-hesap-makinesi/logo.png"
    },
    {
        "name": "express-ile-full-stack-api-codeacademy-istedi-gene",
        "description": "evet bu defa da express ile back-end yazdım birazını verdi gene codeacademy vermese zaten türkçe yapardım birazcık çok azıcık geliştirdim çok azıcık ya neyse şakayı geçelim projeyi başlatmak için node kurulu olmalı sonrasında cmd'ye npm install deyip node server.js demelisiniz ardından genelde localhost/4001'de açılıyor console'a yazar portu",
        "date": "2024-11-15",
        "slug": "express-ile-full-stack-api-codeacademy-istedi-gene",
        "imageUrl": "/static/projects/express-ile-full-stack-api-codeacademy-istedi-gene/logo.png"
    },
    {
        "name": "express-ve-react-ile-full-stack-Restaurant-List-proje-codeacadeemy-birazini-verdi-gene",
        "description": "merhaba bu defa full stack bir projeyle geldim tek bir repository içinde şimdi öncelikle front-end ve back-end içine cmd açıp ikisine de npm install deyin ondan sonra önce back-end'e npm start sonra front-end'e npm start deyin yoksa düzgün çalışmıyor haberiniz olsun",
        "date": "2024-11-17",
        "slug": "express-ve-react-ile-full-stack-Restaurant-List-proje-codeacadeemy-birazini-verdi-gene",
        "imageUrl": "/static/projects/express-ve-react-ile-full-stack-Restaurant-List-proje-codeacadeemy-birazini-verdi-gene/logo.png"
    },
    {
        "name": "fsharp-hesap-makinesi",
        "description": "merhaba bu repository'imzde klasik junior seviyede dili öğrenince yaptığım şeyi yapmaya devam ediyorum f# ile hesap makinesi çalıştırmak için .net 8.0 visual stuido ve f# konsol uygulaması lazım derleyip açınca açılıyor .net9.0 daha yeni diye kullanmadım çıktı biliyorum yoksa ileride kullanmaya başlarım",
        "date": "2024-11-25",
        "slug": "fsharp-hesap-makinesi",
        "imageUrl": "/static/projects/fsharp-hesap-makinesi/logo.png"
    },
    {
        "name": "hesap-makinesi-cpp-ile",
        "description": "c++ ile yazılmış hesap makinesi özellik ve gui olarak c# ile yazılmıştan farkı yok ",
        "date": "2024-10-16",
        "slug": "hesap-makinesi-cpp-ile",
        "imageUrl": "/static/projects/hesap-makinesi-cpp-ile/logo.png"
    },
    {
        "name": "java-hesap-makinesi",
        "description": "merhaba bugün can sıkıntısından java içinde hesap makinesi yaptım Nasıl Çalıştırılır? cmd'yi açın \"javac HesapMakinesi.java\" komutuyla derleyin.  \"java HesapMakinesi\" komutuyla çalıştırın.",
        "date": "2024-11-18",
        "slug": "java-hesap-makinesi",
        "imageUrl": "/static/projects/java-hesap-makinesi/logo.png"
    },
    {
        "name": "odev-buraya-da-atim",
        "description": "evet düz ödev .sln'yi açın f11 basın açılır hepsi çıktıların ss'i var öyle",
        "date": "2024-12-23",
        "slug": "odev-buraya-da-atim",
        "imageUrl": "/static/projects/odev-buraya-da-atim/logo.png"
    },
    {
        "name": "python-hesap-makinesi",
        "description": "merhaba gene can sıkıntısından python'da yazdım hesap makinesini bu defa çalıştırmak için python kurup cmd içinde dosyanın bulunduğu klasöre gidip şu komutu çalıştırın:   \"python hesap_makinesi.py\"",
        "date": "2024-11-18",
        "slug": "python-hesap-makinesi",
        "imageUrl": "/static/projects/python-hesap-makinesi/logo.png"
    },
    {
        "name": "Rastgele-Mesaj-Ureticisi-ve-Karar-Carki-portfolyo-projesi-codeacademynin-istedigi",
        "description": "js kısmına geçebildim codeacademy'nin portfolyo projesi yap dedi bende yaptım çalıştırmak isterseniz nodejs kurmalısınız sonra index.html'i açmanız yeterli olur galiba live server ile açıyorum ben ama çalışır diye düşünüyorum mantığı basit 3 farklı işlevi var o kadar",
        "date": "2024-11-09",
        "slug": "Rastgele-Mesaj-Ureticisi-ve-Karar-Carki-portfolyo-projesi-codeacademynin-istedigi",
        "imageUrl": "/static/projects/Rastgele-Mesaj-Ureticisi-ve-Karar-Carki-portfolyo-projesi-codeacademynin-istedigi/logo.png"
    },
    {
        "name": "react-5-tane-buton",
        "description": "evet bugün biraz garip bir şey atıyorum diyeceksiniz ne alaka bu photoshop dersimiz var grafik ve animasyon diye hoca önceden atmamıza izin veriyor baktım videosu yok kendiniz yapın demiş hoca bende kod olarak attım hocayla hasbihal etmek için nodejs kurun sonra klasör içine cmd açıp npm install deyin sonra npm start deyin açılır",
        "date": "2024-11-13",
        "slug": "react-5-tane-buton",
        "imageUrl": "/static/projects/react-5-tane-buton/logo.png"
    },
    {
        "name": "react-fastapi-mui-python-full-stack-kitap-sitesi",
        "description": "Merhaba bu projemizin adı myanimelist üzerinden esinlendiğim için kullanıcı paneline vb. yerlere mykitaplist projede arkadaş ekleme, hesap açma, profil resmi değiştirme, kitap ekleme, kitap okuma durumu değiştirme, ve haftalık rapor vardır (bozuk olabilir 1 hatfa boyunca test etmedim) readme.md'de anlatıyorum nasıl kurulur çalıştırılır öyle",
        "date": "2024-11-28",
        "slug": "react-fastapi-mui-python-full-stack-kitap-sitesi",
        "imageUrl": "/static/projects/react-fastapi-mui-python-full-stack-kitap-sitesi/logo.png"
    },
    {
        "name": "react-hava-durumu",
        "description": "react ile axios, material-ui, emotion, open-meteo api ile basitçe yazılmış ülke ve şehri girebildiğiniz derece mi yoksa fahrenayt mı olsun diye seçebildiğiniz basit bir proje",
        "date": "2024-10-17",
        "slug": "react-hava-durumu",
        "imageUrl": "/static/projects/react-hava-durumu/logo.png"
    },
    {
        "name": "react-hava-durumu-icin-back-end",
        "description": "https://github.com/EspeeeBne/react-hava-durumu?tab=readme-ov-file#react-hava-durumu için back-end ",
        "date": "2024-10-30",
        "slug": "react-hava-durumu-icin-back-end",
        "imageUrl": "/static/projects/react-hava-durumu-icin-back-end/logo.png"
    },
    {
        "name": "react-rastgele-renk-secici-codeacademy-istedi-gene",
        "description": "evet bu repository'imizde rastgele renk seçici yaptım codeacademy verdi birazını ama css değil mui kullandım gene havalı çünkü neyse projeyi açmak için önce cmd'ye npm install sonra npm start demelisiniz",
        "date": "2024-11-18",
        "slug": "react-rastgele-renk-secici-codeacademy-istedi-gene",
        "imageUrl": "/static/projects/react-rastgele-renk-secici-codeacademy-istedi-gene/logo.png"
    },
    {
        "name": "react-tas-kagit-makas-oyunu",
        "description": "react ile yazılmış basit ve güzel taş kağıt makas oyunu can sıkıntısından belirli şeyleri test etmek için yazdım çalıştırması basit nodejs kurun sonra klasörün içinde cmd açın npm install deyin ondan sonrasında npm start deyin açılır ve oynanır olur",
        "date": "2024-11-11",
        "slug": "react-tas-kagit-makas-oyunu",
        "imageUrl": "/static/projects/react-tas-kagit-makas-oyunu/logo.png"
    },
    {
        "name": "react-ve-cos-sin-ile-yilbasi-agaci-ve-yazisi-degisen-kalp",
        "description": "merhaba .env içindeki yazıyı değiştirince kalp içindeki yazı da değişiyor kurulum için readme.md okuyun react 19 yapacaktım desteklemiyor bazı module'ler ondan react 18 yaptım öyle",
        "date": "2024-12-28",
        "slug": "react-ve-cos-sin-ile-yilbasi-agaci-ve-yazisi-degisen-kalp",
        "imageUrl": "/static/projects/react-ve-cos-sin-ile-yilbasi-agaci-ve-yazisi-degisen-kalp/logo.png"
    },
    {
        "name": "react-ve-dotnet-ile-full-stack-pokedex",
        "description": "merhaba gene büyük çaplı bir proje yaptım kurulum readme.md'de yazıyor o kadar",
        "date": "2024-12-12",
        "slug": "react-ve-dotnet-ile-full-stack-pokedex",
        "imageUrl": "/static/projects/react-ve-dotnet-ile-full-stack-pokedex/logo.png"
    },
    {
        "name": "react-ve-express-ile-full-stack-adam-asamaca",
        "description": "merhaba yeğenim için yaptığım bir proje bu hem kağıt israf olmasın hem de kod yazmış olayım diye yaptım ama biraz fazla kapsamlı oldu öyle proje mongodb ve nodejs gerektiriyor zorunlu olarak",
        "date": "2025-01-26",
        "slug": "react-ve-express-ile-full-stack-adam-asamaca",
        "imageUrl": "/static/projects/react-ve-express-ile-full-stack-adam-asamaca/logo.png"
    },
    {
        "name": "react-ve-fastapi-ve-python-ve-tailwind-css-ile-full-stack-Todo-Uygulamas-",
        "description": "Merhaba bu repository'im full stack python olarak back-end ve react olarak front-end (tailwind olmasa gecikmezdi onu da öğrenmek için kullandım) bir full stack to-do uygulaması nasıl kurulduğunu anlatmak çok zor ondan chatgpt'ye olayı anlattım o da readme.md yazdı oradan bakarsınız nasıl kuruluyor",
        "date": "2024-11-25",
        "slug": "react-ve-fastapi-ve-python-ve-tailwind-css-ile-full-stack-Todo-Uygulamas-",
        "imageUrl": "/static/projects/react-ve-fastapi-ve-python-ve-tailwind-css-ile-full-stack-Todo-Uygulamas-/logo.png"
    },
    {
        "name": "typescript-ruh-hali-takip-eden-takvim",
        "description": "merhaba bu repostiry'mizde aslında kendim için yaptığım typescript ile yazılmış ruh hali takip edici yaptım çalıştırması gene basit dosyaları yükledikten sonra npm install deyip sonrasında npm start derseniz açılır",
        "date": "2024-10-21",
        "slug": "typescript-ruh-hali-takip-eden-takvim",
        "imageUrl": "/static/projects/typescript-ruh-hali-takip-eden-takvim/logo.png"
    },
    {
        "name": "vue-yap-lacaklar-listesi",
        "description": "Merhaba bu repository'imizde vue ile yapılacaklar listesi kodladım vue'nin son sürümünü kullandım çalıştırırken hata verebilir projeyi çalıştırmak için vue-cli kurmalısınız kurduktan sonra npm install deyin sonra npm run serve deyin açılır 8080 portunda",
        "date": "2024-10-19",
        "slug": "vue-yap-lacaklar-listesi",
        "imageUrl": "/static/projects/vue-yap-lacaklar-listesi/logo.png"
    },
    {
        "name": "XOX-Oyunu-C-WinForms",
        "description": "XOX oyunu C# ile yaptım gene can sıkıntısından 3 farklı yapay zeka modu var 3x3'ten 8x8'e kadar alan seçme var arkadaşınızla oynama da var seçebiliyorsunuz bunları projeyi çalıştırmak için xox.sln'i açıp f11 basın ya da derle deyin sonra açın f11 basınca direkt açılıyor sizde açılmazsa devam et'e basın üstten vs ve .net olmadan açılmaz galiba",
        "date": "2024-11-22",
        "slug": "XOX-Oyunu-C-WinForms",
        "imageUrl": "/static/projects/XOX-Oyunu-C-WinForms/logo.png"
    },
        {
        "name": "mp3 başına numara koyma ve numara silme",
        "description": "Merhaba! Bu projeyi, babam uzun yola çıkarsak şarjınız boşa gitmesin al bu usb'yi at bütün müzikleri dedi. Dediğini yaptım yapmasına da babam azar çekti uzun bir bana müzikleri numaralandırmamı istedi baktım hem babamın eski müziklerde hem de toplu mp3 indirme sitelerinden aldığım müziklerde numara var bunları silmek gerek dedim çok üşendim hem silip hem tekrar 0'dan numaralandırmaya sonra bunu araştırırken insanların cidden böyle bir şeye ihtiyacı olduğunu fark ettim ondan dolayı ben bunu kodlayıp github atayım dedim herkes kolayca kullanabilsin diye de direkt js kullandım kurulumu ve kullannımı çok kolay normal kullanıcı için.",
        "date": "2025-05-30",
        "slug": "mp3basinanumarakoymavesilme",
        "imageUrl": "/static/projects/mp3basinanumarakoymavesilme/logo.png"
    }
];

export default projectsData;
