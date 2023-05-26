<script setup lang="ts">
import AOS from 'aos'

const tabs = ['CO JEST GRANE?!', 'PÓŁKOLONIE SUPER AKTYWNE']
const tab = ref(tabs[0])

const price = computed(() => new Date('2022-06-01') > new Date() ? 699 : 730)

onMounted(() => {
  AOS.init()
})

;(function(w,d,s,l,i){
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start': new Date().getTime(),
    event:'gtm.js'
  });
  var f = d.getElementsByTagName(s)[0], j = d.createElement(s) as HTMLScriptElement, dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src= 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window,document,'script','dataLayer','GTM-N9BL7TH');
</script>

<template>
  <div class="text-gray-700 overflow-x-hidden">
    <Head>
      <Title>Poznaj wakacje w LASTAG-u</Title>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="description" content="W Białymstoku zjawili się super niebezpieczni osobnicy i zagrażają bezpieczeństwu całego kraju! Aby uratować Białystok i akalice musimy wyszkolić szybko nowych agentów! Dlatego rozpoczynamy rekrutację do Lastagowej Akademii Tajnych Agentów! Zapisz swoje dziecko na najfajniejsze półkolonie w Białymstoku!" />
      <Link rel="icon" type="image/x-icon" href="/logo.png" />
    </Head>

    <header class="h-[140vh] md:h-screen relative bg-[#04c1f1]">
      <div data-aos="fade-up" class="absolute top-[calc(120vh-24rem)] md:top-[calc(100vh-24rem)] h-screen w-full bg-[#fce784]">
        <img data-aos="fade-down" data-aos-delay="1000" src="/palm-1.webp" class="absolute bottom-1/1 h-64 left-2/4 -transform-x-1/2" />
        <img data-aos="fade-down" data-aos-delay="900" src="/palm-2.webp" class="absolute bottom-1/1 h-64 left-1/4 -transform-x-1/2" />
      </div>
      <wave data-aos="fade-up" data-aos-delay="200" fill="#fff" class="absolute bottom-10 w-full left-0" />
      <wave data-aos="fade-up" data-aos-delay="400" fill="#1a86c7" class="absolute bottom-0 w-full left-0" />
      <wave data-aos="fade-up" data-aos-delay="600" fill="#aed2ef" class="absolute -bottom-10 w-full left-0" />
      <wave data-aos="fade-up" data-aos-delay="800" class="absolute -bottom-20 w-full left-0" />
      <div class="absolute top-[calc(100vh-24rem)] w-full">
        <div data-aos="zoom-out-up" data-aos-delay="1600">
          <polaroid src="/images/20210707_125226207_iOS.webp" class="w-64 absolute top-55 md:-top-15 right-10 rotate-15" />
        </div>
        <div data-aos="zoom-out-up" data-aos-delay="2000">
          <polaroid src="/images/20210513_150522357_iOS.webp" class="w-64 absolute top-37 md:-top-17 right-70 -rotate-13" />
        </div>

        <div data-aos="zoom-out-up" data-aos-delay="1400">
          <polaroid src="/images/20210510_170617580_iOS.webp" class="w-64 absolute top-74 md:-top-9 xl:-top-25 left-10 -rotate-3" />
        </div>
        <div data-aos="zoom-out-up" data-aos-delay="1800">
          <polaroid src="/images/20210508_115417299_iOS.webp" class="w-64 absolute top-88 md:-top-5 xl:-top-15 left-40 rotate-3" />
        </div>
        <div data-aos="zoom-out-up" data-aos-delay="2200">
          <polaroid src="/images/20210723_074521080_iOS.webp" class="w-64 absolute top-95 md:-top-0 xl:top-15 left-20 rotate-8" />
        </div>
      </div>
      <div class="absolute inset-0 h-[calc(100vh-24rem)] flex items-center">
        <div class="md:grid grid-cols-2 gap-14 container mx-auto px-8">
          <div data-aos="fade-right" data-aos-delay="1200" class="text-6xl lg:text-8xl text-white text-center md:text-left py-36 md:py-0 text-stroke-[1px] font-black">
          Poznaj wakacje w LASTAG-u
          </div>
          <div data-aos="fade-left" data-aos-delay="1200" class="flex items-center">
            <div class="relative w-full">
              <div class="absolute transform rotate-6 rounded-md bg-[#1a86c7] w-full h-full shadow" />
              <div class="absolute transform rotate-3 rounded-md bg-[#fce784] w-full h-full shadow" />
              <div class="relative z-1 rounded-md overflow-hidden aspect-ratio-16/9 shadow">
                <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/os1QbjTPOME?vq=hd1080"
                  title="Wakacje w LASTAG-u" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-down" data-aos-delay="2400" data-aos-anchor-placement="top-bottom" class="absolute bottom-4 w-full text-xs text-white flex flex-col items-center">
        <svg viewBox="0 0 60 72" class="arrows h-16 mb-2">
          <path stroke="#fff" fill="none" stroke-width="2" d="M0 0 L30 32 L60 0"></path>
          <path stroke="#fff" fill="none" stroke-width="2" d="M0 20 L30 52 L60 20"></path>
          <path stroke="#fff" fill="none" stroke-width="2" d="M0 40 L30 72 L60 40"></path>
        </svg>

        SCROLL
      </div>
    </header>
    <div class="relative z-1 bg-[#1a86c7] overflow-x-hidden pt-20">
      <div data-aos="zoom-out-up">
        <polaroid src="/images/20210813_100705564_iOS.webp" class="w-64 absolute md:top-75 -z-1 left-0 rotate-18" />
      </div>
      <div data-aos="zoom-out-up" data-aos-delay="200">
        <polaroid src="/images/20210712_102727238_iOS.webp" class="w-64 absolute md:top-174 -z-1 right-24 -rotate-18" />
      </div>
      <div data-aos="zoom-out-up" data-aos-delay="400">
        <polaroid src="/images/20210707_123001890_iOS.webp" class="w-64 absolute md:top-165 -z-1 left-6/9 -rotate-21" />
      </div>
      <div data-aos="zoom-out-up" data-aos-delay="600">
        <polaroid src="/images/20210723_074521080_iOS.webp" class="w-64 absolute md:top-145 -z-1 right-0 -rotate-8" />
      </div>
      <div data-aos="zoom-out-up" data-aos-delay="800">
        <polaroid src="/images/20210508_112045693_iOS.webp" class="w-64 absolute md:top-145 -z-1 right-0 rotate-8" />
      </div>
      <div class="container mx-auto px-8 relative">
        <div class="md:grid grid-cols-3 gap-8">
          <div data-aos="zoom-out-up" data-aos-delay="100" class="col-span-2 bg-white rounded-md py-4 px-8 shadow-xl text-justify">
            <p class="pb-4 text-lg">
              <span class="text-xl text-center py-4 block">
                Na te wakacje przygotowaliśmy DWA całkowicie nowe programy! Półkolonie SUPER AKTYWNE czyli <span class="text-[#1a86c7] font-bold">KOSMIECZNIE WIELKA DAWKA AKTYWNOŚCI</span> I SPORTU oraz półkolonie CO JEST GRANE? Czyli półkolonie z <span class="text-[#1a86c7] font-bold">NOCOWANIEM</span>!
              </span>
              W naszym planie nie ma miejsca na nudę! My nie musimy nigdzie wychodzić bo atrakcje mamy cały czas na miejscu!
            </p>

            <p class="pb-4 text-lg">
              Oczywiście nie samą zabawą człowiek żyje. Na każdym turnusie realizować będziemy warsztaty kreatywne o różnej tematyce!
            </p>

            <p class="pb-4 text-lg">
              W trakcie półkolonii musi być też na odrobinę edukacji ! Zaplanowaliśmy wycieczki z przewodnikiem w bardzo różne , nietypowe miejsca!
            </p>

            <p class="text-lg">
              Nie zapomnimy też o waszej sprawności i kondycji. Każdego dnia czekać będą na nas atrakcje i warsztaty przygotowane przez naszą kadrę, gry i zabawy na świeżym powietrzu a także minimum dwa wyjścia z lokalu w trakcie każdego Turnusu! 
            </p>

            <div class="text-xl text-[#1a86c7] text-center py-4 block">
Podejmiesz nasze wyzwanie? Czy raczej boisz się tajemniczej zjawy?
            </div>
            <p class="text-sm text-center">
              Ps. Oczywiście telefony zostawiamy w domu lub specjalnym koszyku na recepcji !
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="300" class="text-white pt-8 md:pt-0">
            <h3 class="pb-4">W pakiecie:</h3>
            ✔ Bezpieczny wypoczynek, zarejestrowany w Kuratorium Oświaty,<br />
            ✔ Całodzienna opieka i zajęcia pod okiem wysoko wykwalifikowanej kadry, posiadającej odpowiednie
            uprawnienia,<br />
            ✔ Atrakcje w lokalu – laserowy labirynt, fun climbing, lasertag, reflexroom, gry planszowe, konsole, kinect, animacje, sprzęt sportowy, cymbergaj, piłkarzyki, itp. <br>
            ✔ 2 wyjścia z lokalu np. basen lub kino / wycieczki edukacyjne – więcej informacji wkrótce. <br>
            ✔ Pełne wyżywienie – 2 posiłki – II śniadanie, obiad, woda bez limitu<br />
            ✔ Ubezpieczenie NNW<br />
            ✔ Warsztaty kreatywne<br />
            ✔ OSTATNI DZIEŃ TURNUSÓW I, III, V, VII – NOCOWANIE – PIDŻAMA PARTY (OD 18:00 DO 9:00)
          </div>
        </div>

      </div>

      <wave fill="#fce784" class="-mb-20 z-1 relative" />
      <div class="bg-[#fce784] z-1 relative">
        <div class="container mx-auto px-8">
          <h2 class="text-center text-3xl pb-4 md:pb-0">Programy</h2>

          <div class="grid grid-cols-2 md:flex items-center pb-16">
            <div v-for="t in tabs" :key="t" @click="tab = t"
              class="cursor-pointer bg-white/60 text-gray-700 rounded px-2 py-2 md:py-1 font-bold mr-2 shadow"
              :class="[t === tab && '!bg-white !text-[#04c1f1] !shadow-xl']">
              {{ t }}
            </div>

            <div class="ml-auto col-span-2 h-8 md:h-0" />

            <div class="pr-8 text-2xl">
              Cena: {{ price }} zł
            </div>
            <div class="flex justify-end">
              <a v-if="tab === 'CO JEST GRANE?!'" href="https://lastag.pl/produkt/wakacje-2023/">
                <Button>KUP TERAZ</Button>
              </a>
              <a v-if="tab === 'PÓŁKOLONIE SUPER AKTYWNE'" href="https://lastag.pl/produkt/wakacje-2023-2/">
                <Button>KUP TERAZ</Button>
              </a>
            </div>
          </div>

          <div v-if="tab === 'CO JEST GRANE?!'" class="lg:grid grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-xl z-2 col-span-2 mb-4 lg:mb-0">
              <div class="flex justify-center gap-8 -translate-y-26 -mb-22">
                <img src="/co-jest-grane.png" class="h-64 opacity-30 duration-200 cursor-pointer hover:opacity-100" :class="{ '!opacity-100': tab === tabs[0] }" @click="tab = tabs[0]" />
                <img src="/super-aktywne.png" class="h-64 opacity-30 duration-200 cursor-pointer hover:opacity-100" :class="{ '!opacity-100': tab === tabs[1] }" @click="tab = tabs[1]" />
              </div>
              <h3>Zapisz swoje dziecko na najfajniejsze półkolonie w Białymstoku! TEGO JESZCZE NIE BYŁO! PÓŁKOLONIE – CO JEST GRANE ?! Z NOCOWANIEM!</h3><br /><br />

              Na te wakacje stworzyliśmy całkowicie nowy program! Coś na co odważyliśmy się jak na razie tylko my! Półkolonie z nocowaniem! W naszym planie nie ma miejsca na nudę! My nie musimy nigdzie wychodzić bo atrakcje mamy cały czas na miejscu! <br> <br>

Oczywiście nie samą zabawą człowiek żyje. Na każdym turnusie realizować będziemy warsztaty kreatywne o różnej tematyce! <br> <br>

W trakcie półkolonii musi być też na odrobinę edukacji ! Zaplanowaliśmy wycieczki z przewodnikiem w bardzo różne , nietypowe miejsca! <br> <br>

Nie zapomnimy też o waszej sprawności i kondycji. Każdego dnia czekać będą na nas atrakcje i warsztaty przygotowane przez naszą kadrę, gry i zabawy na świeżym powietrzu a także minimum dwa wyjścia z lokalu w trakcie każdego Turnusu! Podejmiesz nasze wyzwanie❓Czy raczej boisz się tajemniczej zjawy? <br> <br>

Ps. Oczywiście telefony zostawiamy w domu lub specjalnym koszyku na recepcji !
            </div>
            <div class="bg-white rounded-xl shadow-xl relative overflow-hidden row-span-3 min-h-100 mb-4">
              <div class="absolute inset-0 overflow-y-scroll p-8">
                <h4>Dzień 1 (poniedziałek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:00</span> przyjazd dzieci + czas wolny na strefie animacji
                  </li>
                  <li><span class="text-gray-400 text-xs">09:00</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> przedstawienie planu całego tygodnia oraz
                    zapoznanie dzieci z regulaminem półkolonii.</li>
                  <li><span class="text-gray-400 text-xs">10:30</span> zapoznanie dzieci z atrakcjami i zasadami
                    korzystania z nich (lasertag, funclimbing, laserowy labirynt, reflexroom)</li>
                  <li><span class="text-gray-400 text-xs">11:00</span> podzielenie dzieci na grupy </li>
                  <li><span class="text-gray-400 text-xs">11:30</span> zabawa na atrakcjach dostępnych w lokalu (funclimbing, lasertag, reflexroom, labirynt)</li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad</li>
                  <li><span class="text-gray-400 text-xs">14:30</span> Lastag Challenge (gry i zabawy ruchowe) </li>
                  <li><span class="text-gray-400 text-xs">15:30</span> czas wolny na strefie animacji + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 2 (wtorek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:00</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:00</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> wycieczka edukacyjna*
                  </li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:30</span> zabawa na atrakcjach dostępnych w lokalu (funclimbing, lasertag, reflexroom, labirynt)</li>
                  <li><span class="text-gray-400 text-xs">15:30</span> czas wolny na strefie animacji + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 3 (środa)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:00</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:00</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> czas wolny na atrakcjach dostępnych w lokalu </li>
                  <li><span class="text-gray-400 text-xs">10:00</span> wyjście do kina (repertuar wakacyjny nie jest jeszcze znany, czekamy na informacje)  </li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:30</span> zabawa na atrakcjach dostępnych w lokalu (funclimbing, lasertag, reflexroom, labirynt)</li>
                  <li><span class="text-gray-400 text-xs">15:30</span> czas wolny na strefie animacji + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 4 (czwartek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:00</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:00</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> warsztaty techniczne (tworzenie własnych puzzli/gier planszowych/koraliki Pyssla)</li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:30</span> zabawa na atrakcjach dostępnych w lokalu (funclimbing, lasertag, reflexroom, labirynt)</li>
                  <li><span class="text-gray-400 text-xs">15:30</span> czas wolny na strefie animacji + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 5 (piątek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:00</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:00</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> czas wolny na atrakcjach dostępnych w lokalu. </li>
                  <li><span class="text-gray-400 text-xs">11:00</span> Lastag Challenge (gry i zabawy ruchowe)  </li>
                  <li><span class="text-gray-400 text-xs">13:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">13:30</span> impreza pożegnalna (wata cukrowa + tatuaże + bańki) </li>
                  <li><span class="text-gray-400 text-xs">15:30</span> czas wolny na strefie animacji + rozjazd dzieci </li>
                </ul>

                <h4>*</h4>
                <div class="text-xs"><strong>turnusy I i V</strong> „Czy w operze są upiory?” – wycieczka do Opery i Filharmonii Podlaskiej, zwiedzanie zaplecza</div>
                <div class="text-xs"><strong>turnusy III i VII</strong> „Woda – skąd, dokąd i co dalej?” – wycieczka do oczyszczalni ścieków</div>
                <div class="text-xs">Z przyczyn od nas niezależnych, kolejność wyjść może ulec zmianie lub wyjście zostanie przesunięte na inny dzień tygodnia.</div>
              </div>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-xl z-2 col-span-2 mb-4 lg:mb-0">
              <h4 class="mb-2">Terminy turnusów</h4>
              26.06.2023 - 30.06.2023 - I turnus<br>
              10.07.2023 - 14.07.2023 - III turnus<br>
              24.07.2023 - 28.07.2023 - V turnus<br>
              07.08.2023 - 11.08.2023 - VII turnus
            </div>
            <div class="flex col-span-2">
              <polaroid src="/images/20210716_123802613_iOS.webp" class="w-64 rotate-15" />
              <polaroid src="/images/20210813_092035136_iOS.webp" class="w-64 -rotate-13" />
              <polaroid src="/images/20210720_133026434_iOS.webp" class="w-64 rotate-10" />
              <polaroid src="/images/20210713_082106015_iOS.webp" class="w-64 -rotate-17" />
            </div>
          </div>
          <div v-if="tab === 'PÓŁKOLONIE SUPER AKTYWNE'" class="lg:grid grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-xl z-2 col-span-2 mb-4 lg:mb-0">
              <div class="flex justify-center gap-8 -translate-y-26 -mb-22">
                <img src="/co-jest-grane.png" class="h-64 opacity-30 duration-200 cursor-pointer hover:opacity-100" :class="{ '!opacity-100': tab === tabs[0] }" @click="tab = tabs[0]" />
                <img src="/super-aktywne.png" class="h-64 opacity-30 duration-200 cursor-pointer hover:opacity-100" :class="{ '!opacity-100': tab === tabs[1] }" @click="tab = tabs[1]" />
              </div>
              <h3>PÓŁKOLONIE SUPER AKTYWNE – KOSMICZNIE WIELKA DAWKA AKTYWNOŚCI I SPORTU</h3> <br><br>

              
Jeżeli uważasz, że twojemu dziecku przydało by się trochę ruchu… albo po prostu ma bardzo DUŻO energii i fajnie by było, żeby się wyszalało przed powrotem do domu <br>
              <h4>TO DOBRZE TRAFIŁEŚ!</h4> <br>
Półkolonie super aktywne czyli kosmicznie wielka dawka aktywności i sportu to nasz pomysł na wakacyjną nudę. Dużo ruchu! Gry i zabawy na świeżym powietrzu! Codzienna poranny trening! Dużo różnych dyscyplin sportowych! Treningi z zawodnikami futbolu amerykańskiego z Lowlanders Białystok oraz baseball-u z Lisami Białystok! Gry, zabawy i drużynowa rywalizacja! <br><br>
Zapisz swoje dziecko na najbardziej aktywne półkolonie w naszej galaktyce !  <br><br>

Przygotujcie się na kosmiczne combo!  <br><br>

Marzy Ci się aby dziecko wróciło do domu i padło ze zmęczenia? Nie zwlekaj, zapisz swoje dziecko już dziś! Ilość miejsc ograniczona! <br><br>

Ps. Oczywiście telefony zostawiamy w domu lub specjalnym koszyku na recepcji!
            </div>
            <div class="bg-white rounded-xl shadow-xl relative overflow-hidden row-span-3 min-h-100 mb-4">
              <div class="absolute inset-0 overflow-y-scroll p-8">
                <h4>Dzień 1 (poniedziałek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:00</span> przyjazd dzieci + czas wolny na strefie animacji
                  </li>
                  <li><span class="text-gray-400 text-xs">09:00</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> przedstawienie planu całego tygodnia oraz
                    zapoznanie dzieci z regulaminem półkolonii.</li>
                  <li><span class="text-gray-400 text-xs">10:30</span> zapoznanie dzieci z atrakcjami i zasadami
                    korzystania z nich (lasertag, funclimbing, laserowy labirynt, reflexroom)</li>
                  <li><span class="text-gray-400 text-xs">11:00</span> podzielenie dzieci na grupy </li>
                  <li><span class="text-gray-400 text-xs">11:30</span> warsztaty – wykonanie drużynowych koszulek</li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad</li>
                  <li><span class="text-gray-400 text-xs">14:30</span> zabawa na atrakcjach dostępnych w lokalu (funclimbing, lasertag, reflexroom, labirynt) </li>
                  <li><span class="text-gray-400 text-xs">15:30</span> czas wolny na strefie animacji + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 2 (wtorek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:00</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:00</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span>  wyjście na trening z drużyną LOWLANDERS (futbol amerykański)
                  </li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:30</span> zabawa na atrakcjach dostępnych w lokalu (funclimbing, lasertag, reflexroom, labirynt)</li>
                  <li><span class="text-gray-400 text-xs">15:30</span> czas wolny na strefie animacji + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 3 (środa)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:00</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:00</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> czas wolny na atrakcjach dostępnych w lokalu </li>
                  <li><span class="text-gray-400 text-xs">10:00</span> wyjście na basen </li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:30</span> zabawa na atrakcjach dostępnych w lokalu (funclimbing, lasertag, reflexroom, labirynt)</li>
                  <li><span class="text-gray-400 text-xs">15:30</span> czas wolny na strefie animacji + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 4 (czwartek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:00</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:00</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> wyjście na trening z drużyną LISY BIAŁYSTOK (drużyna baseballowa)</li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:30</span> seans filmowy</li>
                  <li><span class="text-gray-400 text-xs">15:30</span> czas wolny na strefie animacji + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 5 (piątek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:00</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:00</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> czas wolny na atrakcjach dostępnych w lokalu. </li>
                  <li><span class="text-gray-400 text-xs">11:00</span> test wiedzy na temat sportów, które odbyły się na turnusie + wyłonienie najlepszej Lastagowej drużyny + rozdanie nagród.  </li>
                  <li><span class="text-gray-400 text-xs">13:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">13:30</span> impreza pożegnalna (wata cukrowa + tatuaże + bańki) </li>
                  <li><span class="text-gray-400 text-xs">15:00</span> czas wolny na strefie animacji + rozjazd dzieci </li>
                </ul>

                <h4>*</h4>
                <div class="text-xs"><strong>turnusy I i V</strong> „Czy w operze są upiory?” – wycieczka do Opery i Filharmonii Podlaskiej, zwiedzanie zaplecza</div>
                <div class="text-xs"><strong>turnusy III i VII</strong> „Woda – skąd, dokąd i co dalej?” – wycieczka do oczyszczalni ścieków</div>
                <div class="text-xs">Z przyczyn od nas niezależnych, kolejność wyjść może ulec zmianie lub wyjście zostanie przesunięte na inny dzień tygodnia.</div>
              </div>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-xl z-2 col-span-2 mb-4 lg:mb-0">
              <h4 class="mb-2">Terminy turnusów</h4>
              03.07.2022 - 07.07.2022 -  II turnus<br>
              17.07.2022 - 21.07.2022 - IV turnus<br>
              31.07.2022 - 04.08.2022 - VI turnus<br>
              21.08.2022 - 25.08.2022 - VIII turnus<br>
            </div>
            <div class="flex col-span-2">
              <polaroid src="/images/20210716_123802613_iOS.webp" class="w-64 rotate-15" />
              <polaroid src="/images/20210813_092035136_iOS.webp" class="w-64 -rotate-13" />
              <polaroid src="/images/20210720_133026434_iOS.webp" class="w-64 rotate-10" />
              <polaroid src="/images/20210713_082106015_iOS.webp" class="w-64 -rotate-17" />
            </div>
          </div>

          <h2 class="pt-16 pb-8 text-center text-3xl">Nasza kadra</h2>
          <Crew />
        </div>
      </div>
      <div class="bg-gray-800 -mt-10px relative -z-1">
        <wave fill="#fce784" class="-scale-y-100 -z-1" />
        <footer class="flex items-center text-gray-400 container mx-auto px-8 py-2">
          <div>
            copyright &copy; 2022
            <a class="text-[#fce784] hover:text-[#04c1f1]" href="https://lastag.pl">lastag.pl</a>
          </div>
          <div class="ml-auto" />
          designed by
          <a class="text-[#fce784] hover:text-[#04c1f1] inline-flex items-center" href="https://wvffle.net">
            <img src="https://raw.githubusercontent.com/wvffle/wvffle.net/master/src/assets/logo.svg"
              class="h-4 -mb-1 mx-1" />
            wvffle.net
          </a>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.programme
  list-style-type none
  font-size 0.8rem

  > li
    display grid
    grid-template-columns auto 1fr
    padding-bottom 1rem

    > span
      padding-right 1ch

@keyframes arrow
  0% 
  100%
    opacity 0
  40% 
    opacity 1

.arrows
  path
    animation arrow 2s infinite

    &:nth-child(1)
      animation-delay -1s

    &:nth-child(2)
      animation-delay -0.5s

    &:nth-child(3)
      animation-delay 0s
</style>
