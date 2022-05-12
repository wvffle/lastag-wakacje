<script setup lang="ts">
const tabs = ['Sportowe Świrusy', 'Lastag Challenge']
const tab = ref(tabs[0])

const price = computed(() => new Date('2022-06-01') > new Date() ? 699 : 750)
</script>

<template>
  <div class="text-gray-700">
    <header class="min-h-screen relative bg-[#04c1f1]">
      <div class="absolute top-[calc(100vh-24rem)] h-screen w-full bg-[#fce784]">
        <img src="/palm-1.webp" class="absolute bottom-1/1 h-64 left-2/4 -transform-x-1/2" />
        <img src="/palm-2.webp" class="absolute bottom-1/1 h-64 left-1/4 -transform-x-1/2" />
        <polaroid src="/images/20210707_125226207_iOS.webp" class="w-64 absolute z-2 -top-15 right-10 rotate-15" />
        <polaroid src="/images/20210513_150522357_iOS.webp" class="w-64 absolute z-2 -top-17 right-70 -rotate-13" />

        <polaroid src="/images/20210510_170617580_iOS.webp" class="w-64 absolute z-2 -top-25 left-10 -rotate-3" />
        <polaroid src="/images/20210508_115417299_iOS.webp" class="w-64 absolute z-2 -top-15 left-40 rotate-3" />
        <polaroid src="/images/20210723_074521080_iOS.webp" class="w-64 absolute z-2 top-15 left-20 rotate-8" />
      </div>
      <wave fill="#fff" class="absolute bottom-10 w-full left-0" />
      <wave fill="#1a86c7" class="absolute bottom-0 w-full left-0" />
      <wave fill="#aed2ef" class="absolute -bottom-10 w-full left-0" />
      <wave class="absolute -bottom-20 w-full left-0" />
      <div class="absolute inset-0 h-[calc(100vh-24rem)] flex items-center">
        <div class="grid grid-cols-2 gap-14 container mx-auto px-8">
          <div class="text-8xl text-white text-stroke-[1px] font-black">
          Poznaj wakacje w LASTAG-u
          </div>
          <div class="flex items-center">
            <div class="relative w-full">
              <div class="absolute transform rotate-6 rounded-md bg-[#1a86c7] w-full h-full shadow" />
              <div class="absolute transform rotate-3 rounded-md bg-[#fce784] w-full h-full shadow" />
              <div class="relative z-1 rounded-md overflow-hidden aspect-ratio-16/9 shadow">
                <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/aekQAEEVeqM?vq=hd1080"
                  title="Wakacje w LASTAG-u" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 w-full text-xs text-white flex flex-col items-center">
        <svg viewBox="0 0 60 72" class="arrows h-16">
          <path stroke="#fff" fill="none" stroke-width="2" d="M0 0 L30 32 L60 0"></path>
          <path stroke="#fff" fill="none" stroke-width="2" d="M0 20 L30 52 L60 20"></path>
          <path stroke="#fff" fill="none" stroke-width="2" d="M0 40 L30 72 L60 40"></path>
        </svg>

        SCROLL
      </div>
    </header>
    <div class="relative z-1 bg-[#1a86c7] overflow-x-hidden pt-20">
      <polaroid src="/images/20210813_100705564_iOS.webp" class="w-64 absolute top-75 -z-1 left-0 rotate-18" />

      <polaroid src="/images/20210712_102727238_iOS.webp" class="w-64 absolute top-174 -z-1 right-24 -rotate-18" />
      <polaroid src="/images/20210707_123001890_iOS.webp" class="w-64 absolute top-165 -z-1 left-6/9 -rotate-21" />

      <polaroid src="/images/20210723_074521080_iOS.webp" class="w-64 absolute top-145 -z-1 right-0 -rotate-8" />
      <polaroid src="/images/20210508_112045693_iOS.webp" class="w-64 absolute top-145 -z-1 right-0 rotate-8" />
      <div class="container mx-auto px-8 relative">
        <div class="grid grid-cols-3 gap-8">
          <div class="col-span-2 bg-white rounded-md py-4 px-8 shadow-xl text-justify">
            <p class="pb-4 text-lg">
              <span class="text-xl text-center py-4 block">
                W Białymstoku zjawili się super niebezpieczni osobnicy i zagrażają bezpieczeństwu całego kraju! 
              </span>
              Nazywają się organizacja <span class="text-[#1a86c7] font-bold">Parasol</span>, słyną ze swojej przebiegłości i próbują przejąć kontrolę nad światem!
              Jedynie <span class="text-[#1a86c7] font-bold">Tajna Agencja Szpiegowska Lastag</span> może ich powstrzymać – niestety wszyscy tajni agenci mają akurat
              katar! <br><br>
              <span class="text-sm block">
                Aby uratować Białystok i akalice musimy wyszkolić szybko nowych agentów! 
                Dlatego rozpoczynamy rekrutację do Lastagowej Akademii Tajnych Agentów! 
                Zapisz swoje dziecko na <span class="text-[#1a86c7] font-bold">najfajniejsze półkolonie w Białymstoku</span>!
              </span>
            </p>

            <p class="pb-4 text-sm">
              Do tego zadania poszukiwani są <span class="text-[#1a86c7] font-bold">NIEZWYKLE AMBITNI I ODWAŻNI</span> mali Tajni Agenci – dzieci w wieku od 7 do 13 roku
              życia! <br />
              W trakcie półkolonii, według całkowicie nowego programu <span class="text-[#1a86c7] font-bold">LASTAG CHALLENGE</span>, każdy agent będzie miał okazję
              zmierzyć się z naszymi <span class="text-[#1a86c7] font-bold">WYZWANIAMI</span>! <br />
              Za zaliczenie zadań, zarówno tych grupowych jak i indywidualnych przewidziane są <span class="text-[#1a86c7] font-bold">ODZNAKI</span>! Kto zdobędzie ich
              najwięcej? <br />
              O tym przekonamy się już po pierwszym turnusie!
            </p>

            <p class="text-lg">
              Oczywiście nie zapominamy o wartościach edukacyjnych. <br />
              Na każdym turnusie realizować będziemy warsztaty kreatywne o różnej tematyce! Nie zapomnimy też o waszej
              sprawności i kondycji. <br />
              Każdego dnia czekać będą na nas atrakcje i warsztaty przygotowane przez naszą akademię.<br><br>
            </p>

            <div class="text-xl text-[#1a86c7] text-center py-4 block">
            Podejmujesz wyzwanie?
            </div>
          </div>
          <div class="text-white">
            <h3 class="pb-4">W pakiecie:</h3>
            ✔ Bezpieczny wypoczynek, zarejestrowany w Kuratorium Oświaty,<br />
            ✔ Całodzienna opieka i zajęcia pod okiem wysoko wykwalifikowanej kadry, posiadającej odpowiednie
            uprawnienia,<br />
            ✔ Atrakcje – laserowy labirynt, fun climbing, lasertag, reflexroom, gry planszowe, konsole, kinect,
            animacje,<br />
            ✔ Wyjście z lokalu np. kino,<br />
            ✔ Pełne wyżywienie – 3 posiłki – II śniadanie, obiad i podwieczorek, woda i herbata bez limitu,<br />
            ✔ Bilety na przejazdy komunikacją miejską,<br />
            ✔ Ubezpieczenie NNW,<br />
            ✔ Warsztaty kreatywne,<br />
            ✔ Pamiątkowe gadżety (dyplomy, koszulki, smycze).
          </div>
        </div>

      </div>

      <wave fill="#fce784" class="-mb-20" />
      <div class="bg-[#fce784]">
        <div class="container mx-auto px-8">
          <h2 class="text-center text-3xl">Programy</h2>

          <div class="flex items-center pb-16">
            <div v-for="t in tabs" :key="t" @click="tab = t"
              class="cursor-pointer bg-white/60 text-gray-700 rounded px-2 py-1 font-bold mr-2 shadow"
              :class="[t === tab && '!bg-white !text-[#04c1f1] !shadow-xl']">
              {{ t }}
            </div>

            <div class="ml-auto" />

            <div class="pr-8 text-2xl">
              Cena: {{ price }} zł
            </div>
            <a v-if="tab === 'Sportowe Świrusy'" href="https://lastag.pl/produkt/wakacje-2022/">
              <Button>KUP TERAZ</Button>
            </a>
            <a v-if="tab === 'LASTAG Challenge'" href="https://lastag.pl/produkt/wakacje-tajnych-agentow-2022/">
              <Button>KUP TERAZ</Button>
            </a>
          </div>

          <div v-if="tab === 'Sportowe Świrusy'" class="grid grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-xl z-2 col-span-2">
              <div class="flex justify-center">
                <img src="/sportowe-swirusy.webp" class="h-32 -translate-y-20 -mb-16" />
              </div>
              SPORTOWE ŚWIRUSY – to nasz nowy program półkolonii.<br /><br />

              Opracowany został w oparciu o nasze doświadczenia zdobyte podczas codziennej pracy z dziećmi.<br />
              Wyszliśmy z założenia, że każde dziecko jest inne i każde jest u nas z innego powodu, ale absolutnie
              żadnemu
              nie zaszkodzi ODROBINA RUCHU!<br /><br />

              Dlatego tworząc ten program postawiliśmy na jeszcze większą ilość ruchu i aktywności fizycznej niż
              zazwyczaj!<br />
              Każdy dzień będziemy zaczynać rozgrzewką, mnóstwo zabaw na świeżym powietrzu oraz konkurencji
              sportowych.<br />
              Codziennie będziemy gościć trenerów zajmujących się różnymi dyscyplinami sportowymi.<br /><br />

              W LASTAG-u nie można się nudzić – to FAKT! Nasza misja polega na tym aby dawać Państwa pociechom jak
              najlepsze wspomnienia!<br /><br />

              Dzieci mają ogromną potrzebę ruchu - tylko nie wszystkie po dwóch latach pandemii o tym pamiętają :)<br />
              Spokojnie - my im o tym przypomnimy :)
            </div>
            <div class="bg-white rounded-xl shadow-xl relative overflow-hidden row-span-2">
              <div class="absolute inset-0 overflow-y-scroll p-8">
                <h4>Dzień 1 (poniedziałek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:30</span> przyjazd dzieci + czas wolny na strefie animacji
                  </li>
                  <li><span class="text-gray-400 text-xs">09:30</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> przedstawienie planu całego tygodnia oraz
                    zapoznanie dzieci z regulaminem półkolonii.</li>
                  <li><span class="text-gray-400 text-xs">10:30</span> zapoznanie dzieci z atrakcjami i zasadami
                    korzystania z nich (lasertag, funclimbing, laserowy labirynt, reflexroom)</li>
                  <li><span class="text-gray-400 text-xs">11:00</span> podzielenie dzieci na zespoły, nadawanie nazw
                    drużynom </li>
                  <li><span class="text-gray-400 text-xs">11:30</span> wizyta straży pożarnej wraz z pokazem
                    specjalistycznego sprzętu oraz pogadanka o bezpieczeństwie (opcjonalnie wizyta policji lub straży
                    miejskiej)</li>
                  <li><span class="text-gray-400 text-xs">12:00</span> zabawy na atrakcjach dostępnych w lokalu w
                    (lasertag, funclimbing, laserowy labirynt, reflexroom)</li>
                  <li><span class="text-gray-400 text-xs">13:00</span> obiad</li>
                  <li><span class="text-gray-400 text-xs">13:30</span> kontynuacja zabaw w lasertag, funclimbing,
                    laserowy labirynt, reflexroom</li>
                  <li><span class="text-gray-400 text-xs">15:30</span> podwieczorek</li>
                  <li><span class="text-gray-400 text-xs">15:45</span> czas wolny na strefie animacji + atrakcje
                    dostępne w lokalu itp. + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 2 (wtorek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:30</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> rozgrzewka sportowa + sportowy CHALLENGE DNIA
                  </li>
                  <li><span class="text-gray-400 text-xs">11:00</span> zajęcia z trenerem </li>
                  <li><span class="text-gray-400 text-xs">12:00</span> warsztaty techniczne</li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:30</span> kontynuacja warsztatów</li>
                  <li><span class="text-gray-400 text-xs">15:30</span> podwieczorek</li>
                  <li><span class="text-gray-400 text-xs">15:45</span> czas wolny na strefie animacji + atrakcje
                    dostępne w lokalu itp. + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 3 (środa)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:30</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> rozgrzewka sportowa + sportowy CHALLENGE DNIA
                  </li>
                  <li><span class="text-gray-400 text-xs">11:00</span> zajęcia z trenerem </li>
                  <li><span class="text-gray-400 text-xs">12:00</span> warsztaty techniczne</li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:30</span> kontynuacja warsztatów </li>
                  <li><span class="text-gray-400 text-xs">15:30</span> podwieczorek </li>
                  <li><span class="text-gray-400 text-xs">15:45</span> czas wolny na strefie animacji + atrakcje
                    dostępne w lokalu itp. + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 4 (czwartek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:30</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> wyjście do Fast Park połączone z ogniskiem i
                    pieczeniem kiełbasek na ognisku</li>
                  <li><span class="text-gray-400 text-xs">14:30</span> podwieczorek</li>
                  <li><span class="text-gray-400 text-xs">14:45</span> czas wolny na strefie animacji + atrakcje
                    dostępne w lokalu itp. + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 5 (piątek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:30</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> rozgrzewka sportowa + sportowy CHALLENGE DNIA
                  </li>
                  <li><span class="text-gray-400 text-xs">11:00</span> zajęcia z trenerem </li>
                  <li><span class="text-gray-400 text-xs">12:00</span> warsztaty techniczne</li>
                  <li><span class="text-gray-400 text-xs">14.00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:30</span> kontynuacja warsztatów </li>
                  <li><span class="text-gray-400 text-xs">15:30</span> podwieczorek </li>
                  <li><span class="text-gray-400 text-xs">15:45</span> czas wolny na strefie animacji + atrakcje
                    dostępne w lokalu itp. + rozjazd dzieci </li>
                </ul>
              </div>
            </div>
            <div class="flex col-span-2">
              <polaroid src="/images/20210716_123802613_iOS.webp" class="w-64 rotate-15" />
              <polaroid src="/images/20210813_092035136_iOS.webp" class="w-64 -rotate-13" />
              <polaroid src="/images/20210720_133026434_iOS.webp" class="w-64 rotate-10" />
              <polaroid src="/images/20210713_082106015_iOS.webp" class="w-64 -rotate-17" />
            </div>
          </div>
          <div v-if="tab === 'Lastag Challenge'" class="grid grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-xl z-2 col-span-2">
              <div class="flex justify-center">
                <img src="/lastag-challenge.webp" class="h-48 -translate-y-26 -mb-22" />
              </div>
              LASTAG CHALLENGE – to nasz nowy program półkolonii.<br><br>

              Opracowany został w oparciu o nasze doświadczenia zdobyte podczas codziennej pracy z dziećmi.<br>
              Wyszliśmy z założenia, że każde dziecko jest inne i każde jest u nas z innego powodu.<br><br>

              Dlatego postanowiliśmy na jeszcze większą różnorodność! Jeszcze więcej zabawy! Jeszcze więcej kreatywności!
              I nic na siłę! To brzmi jak chaos? A my mówimy owszem ale uporządkowany!<br><br>

              W LASTAG-u nie można się nudzić – to FAKT!<br>
              Nasza misja polega na tym aby dawać Państwa pociechom jak najlepsze wspomnienia!
              Dlatego zaangażowaliśmy sztab wybitnych naukowców aby opracowali nam 54 dowody na to iż w LASTAG-u nie można
              się nudzić! Dając dzieciom wyzwania na miarę ich umiejętności budujemy w nich poczucie sukcesu, chęć działania i miłość
              do pracy.<br><br>

              Dzieci mają ogromną potrzebę ruchu.<br>
              Zadziwiające jest, jak szybko dziecko posadzone przed telewizor, komputer lub tablet traci zainteresowanie
              otaczającym go światem i zastyga niemalże bez ruchu na długi czas.<br>
              A na to nie możemy sobie pozwolić!<br><br>

              Na tym turnusie postaramy się aby Państwa dzieci stały się trochę bardziej dziećmi i podkręcimy lekko ich
              ciekawość świata!<br>
              Formuła lastag challenge polega na wprowadzeniu elementu grywalizacji pomiędzy grupami podczas całego
              turnusu.<br><br>

              Będą dyscypliny drużynowe oraz indywidualne.<br>
              Każdego dnia będziemy mieli inną konkurencję obowiązkową (LASTAG GAME) oraz konkurencje do wyboru!
              Jeżeli ktoś nie będzie chciał brać udziału w jednych warsztatach to będzie mógł się zająć czymś innym.<br><br>

              Aby dodatkowo podkręcić atmosferę dzieci nie będą konkurować o pietruszkę! Gra będzie się odbywać o dość
              wysoką stawkę (ok 10 kg cukierków), vouchery do LASTAG-u lub o złotą kartę LASTAG-u czyli pół roku korzystania z atrakcji lastag-u gratis*!<br><br>

              Dodatkowo dzieci będą nagradzane odznakami za wypełnianie naszych CHALLENGE-ów!<br>
              Poniżej prezentujemy spis wszystkich wyzwań.<br>
              Każde wyzwanie to niezapomniane wspomnienie dla młodego człowieka.
            </div>
            <div class="bg-white rounded-xl shadow-xl relative overflow-hidden row-span-2">
              <div class="absolute inset-0 overflow-y-scroll p-8">
                <h4>Dzień 1 (poniedziałek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:30</span> przyjazd dzieci + czas wolny na strefie animacji
                  </li>
                  <li><span class="text-gray-400 text-xs">09:30</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> przedstawienie planu całego tygodnia oraz
                    zapoznanie dzieci z regulaminem półkolonii.</li>
                  <li><span class="text-gray-400 text-xs">10:30</span> zapoznanie dzieci z atrakcjami i zasadami
                    korzystania z nich (lasertag, funclimbing, laserowy labirynt, reflexroom)</li>
                  <li><span class="text-gray-400 text-xs">11:00</span> podzielenie dzieci na zespoły, nadawanie nazw
                    drużynom </li>
                  <li><span class="text-gray-400 text-xs">11:30</span> wizyta straży pożarnej wraz z pokazem
                    specjalistycznego sprzętu oraz pogadanka o bezpieczeństwie (opcjonalnie wizyta policji lub straży
                    miejskiej)</li>
                  <li><span class="text-gray-400 text-xs">12:00</span> zabawy na atrakcjach dostępnych w lokalu w
                    (lasertag, funclimbing, laserowy labirynt, reflexroom)</li>
                  <li><span class="text-gray-400 text-xs">13:00</span> obiad</li>
                  <li><span class="text-gray-400 text-xs">13:30</span> kontynuacja zabaw w lasertag, funclimbing,
                    laserowy labirynt, reflexroom</li>
                  <li><span class="text-gray-400 text-xs">15:30</span> podwieczorek</li>
                  <li><span class="text-gray-400 text-xs">15:45</span> rozgrywka LASTAG GAME </li>
                  <li><span class="text-gray-400 text-xs">16:00</span> czas wolny na strefie animacji + atrakcje dostępne w lokalu itp. + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 2 (wtorek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:30</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> wyjście Jumper Park </li>
                  <li><span class="text-gray-400 text-xs">14:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:30</span> zajęcia kreatywne (robienie bransoletek, koraliki pyssla) </li>
                  <li><span class="text-gray-400 text-xs">15:30</span> podwieczorek</li>
                  <li><span class="text-gray-400 text-xs">15:45</span> rozgrywka LASTAG GAME </li>
                  <li><span class="text-gray-400 text-xs">16:00</span> czas wolny na strefie animacji + atrakcje
                    dostępne w lokalu itp. + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 3 (środa)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:30</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> zajęcia jogi z instruktorem </li>
                  <li><span class="text-gray-400 text-xs">11:00</span> warsztaty tematyczne (malowanie techniką pouring) </li>
                  <li><span class="text-gray-400 text-xs">13:00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">13:30</span> kontynuacja warsztatów </li>
                  <li><span class="text-gray-400 text-xs">15:30</span> podwieczorek </li>
                  <li><span class="text-gray-400 text-xs">15:45</span> rozgrywka LASTAG GAME </li>
                  <li><span class="text-gray-400 text-xs">16:00</span> czas wolny na strefie animacji + atrakcje
                    dostępne w lokalu itp. + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 4 (czwartek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:30</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> wyjście do Fast Park połączone z ogniskiem i
                    pieczeniem kiełbasek na ognisku</li>
                  <li><span class="text-gray-400 text-xs">14:30</span> podwieczorek</li>
                  <li><span class="text-gray-400 text-xs">15:00</span> rozgrywka LASTAG GAME </li>
                  <li><span class="text-gray-400 text-xs">15:30</span> czas wolny na strefie animacji + atrakcje
                    dostępne w lokalu itp. + rozjazd dzieci </li>
                </ul>

                <h4>Dzień 5 (piątek)</h4>
                <ul class="programme">
                  <li><span class="text-gray-400 text-xs">07:30</span> przyjazd dzieci + czas wolny na strefie animacji
                    + atrakcje dostępne w lokalu</li>
                  <li><span class="text-gray-400 text-xs">09:30</span> II śniadanie</li>
                  <li><span class="text-gray-400 text-xs">10:00</span> podsumowanie zdobytych odznaczeń, rozdanie nagród i dyplomów  </li>
                  <li><span class="text-gray-400 text-xs">11:00</span> warsztaty techniczne</li>
                  <li><span class="text-gray-400 text-xs">13.00</span> obiad </li>
                  <li><span class="text-gray-400 text-xs">14:00</span> zabawa na atrakcjach dostępnych w lokalu </li>
                  <li><span class="text-gray-400 text-xs">15:30</span> podwieczorek </li>
                  <li><span class="text-gray-400 text-xs">15:45</span> FINAŁ LASTAG GAME </li>
                  <li><span class="text-gray-400 text-xs">16:00</span> czas wolny na strefie animacji + atrakcje
                    dostępne w lokalu itp. + rozjazd dzieci </li>
                </ul>
              </div>
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