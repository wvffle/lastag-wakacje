<script setup lang="ts">
const tabs = ['Sportowe Świrusy', 'LASTAG Challenge']
const tab = ref(tabs[0])

const price = computed(() => new Date('2022-06-01') > new Date() ? 699 : 750)
</script>

<template>
  <div>
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2">Wakacje</div>
        <div>
          W Białymstoku zjawili się super niebezpieczni osobnicy i zagrażają bezpieczeństwu całego kraju! 
          Nazywają się organizacja Parasol, słyną ze swojej przebiegłości i próbują przejąć kontrolę nad światem! 
          Jedynie Tajna Agencja Szpiegowska Lastag może ich powstrzymać – niestety wszyscy tajni agenci mają akurat katar! 
          Aby uratować Białystok i akalice musimy wyszkolić szybko nowych agentów! 
          Dlatego rozpoczynamy rekrutację do Lastagowej Akademii Tajnych Agentów! 
          Zapisz swoje dziecko na najfajniejsze półkolonie w Białymstoku!

          Do tego zadania poszukiwani są NIEZWYKLE AMBITNI I ODWAŻNI mali Tajni Agenci – dzieci w wieku od 7 do 13 roku życia! 
          W trakcie półkolonii, według całkowicie nowego programu LASTAG CHALLENGE, każdy agent będzie miał okazję zmierzyć się z naszymi WYZWANIAMI! 
          Za zaliczenie zadań, zarówno tych grupowych jak i indywidualnych przewidziane są ODZNAKI! Kto zdobędzie ich najwięcej? 
          O tym przekonamy się już po pierwszym turnusie!

          Oczywiście nie zapominamy o wartościach edukacyjnych. 
          Na każdym turnusie realizować będziemy warsztaty kreatywne o różnej tematyce! Nie zapomnimy też o waszej sprawności i kondycji. 
          Każdego dnia czekać będą na nas atrakcje i warsztaty przygotowane przez naszą akademię. 
          Podejmujesz wyzwanie?

          W pakiecie:
          ✔ Bezpieczny wypoczynek, zarejestrowany w Kuratorium Oświaty,
          ✔ Całodzienna opieka i zajęcia pod okiem wysoko wykwalifikowanej kadry, posiadającej odpowiednie uprawnienia,
          ✔ Atrakcje – laserowy labirynt, fun climbing, lasertag, reflexroom, gry planszowe, konsole, kinect, animacje,
          ✔ Wyjście z lokalu np. kino,
          ✔ Pełne wyżywienie – 3 posiłki – II śniadanie, obiad i podwieczorek, woda i herbata bez limitu,
          ✔ Bilety na przejazdy komunikacją miejską,
          ✔ Ubezpieczenie NNW,
          ✔ Warsztaty kreatywne,
          ✔ Pamiątkowe gadżety (dyplomy, koszulki, smycze).
        </div>
        <div>
          <div class="relative">
            <div class="absolute transform rotate-6 rounded-md bg-[#1a86c7] w-full h-full shadow" />
            <div class="absolute transform rotate-3 rounded-md bg-[#fce784] w-full h-full shadow" />
            <div class="relative z-1 rounded-md overflow-hidden aspect-ratio-16/9 shadow">
              <iframe
                class="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/aekQAEEVeqM"
                title="Wakacje w LASTAG-u"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-8">
      <h2>Programy</h2>

      <div class="flex items-center">
        <div v-for="t in tabs" :key="t" @click="tab = t" class="cursor-pointer">{{ t }}</div>

        <div class="ml-auto" />

        <div class="pr-8 text-lg">
          Cena: {{ price }} zł
        </div>
        <Button>KUP TERAZ</Button>
      </div>

      <div v-if="tab === 'Sportowe Świrusy'">
        SPORTOWE ŚWIRUSY – to nasz nowy program półkolonii. 
        Opracowany został w oparciu o nasze doświadczenia zdobyte podczas codziennej pracy z dziećmi. 
        Wyszliśmy z założenia, że każde dziecko jest inne i każde jest u nas z innego powodu, ale absolutnie żadnemu nie zaszkodzi ODROBINA RUCHU! 
        Dlatego tworząc ten program postawiliśmy na jeszcze większą ilość ruchu i aktywności fizycznej niż zazwyczaj! 
        Każdy dzień będziemy zaczynać rozgrzewką, mnóstwo zabaw na świeżym powietrzu oraz konkurencji sportowych. 
        Codziennie będziemy gościć trenerów zajmujących się różnymi dyscyplinami sportowymi. 
        W LASTAG-u nie można się nudzić – to FAKT! Nasza misja polega na tym aby dawać Państwa pociechom jak najlepsze wspomnienia! 
        Dzieci mają ogromną potrzebę ruchu - tylko nie wszystkie po dwóch latach pandemii o tym pamiętają :) 
        Spokojnie - my im o tym przypomnimy :)
      </div>
      <div v-if="tab === 'LASTAG Challenge'">
        LASTAG CHALLENGE – to nasz nowy program półkolonii. 
        Opracowany został w oparciu o nasze doświadczenia zdobyte podczas codziennej pracy z dziećmi. 
        Wyszliśmy z założenia, że każde dziecko jest inne i każde jest u nas z innego powodu. 
        Dlatego postanowiliśmy na jeszcze większą różnorodność! Jeszcze więcej zabawy! Jeszcze więcej kreatywności! I nic na siłę! 
        To brzmi jak chaos? 
        A my mówimy owszem ale uporządkowany! 
        W LASTAG-u nie można się nudzić – to FAKT! 
        Nasza misja polega na tym aby dawać Państwa pociechom jak najlepsze wspomnienia! 
        Dlatego zaangażowaliśmy sztab wybitnych naukowców aby opracowali nam 54 dowody na to iż w LASTAG-u nie można się nudzić! 
        Dając dzieciom wyzwania na miarę ich umiejętności budujemy w nich poczucie sukcesu, chęć działania i miłość do pracy. 
        Dzieci mają ogromną potrzebę ruchu. 
        Zadziwiające jest, jak szybko dziecko posadzone przed telewizor, komputer lub tablet traci zainteresowanie otaczającym go światem i zastyga niemalże bez ruchu na długi czas. 
        A na to nie możemy sobie pozwolić! 
        Na tym turnusie postaramy się aby Państwa dzieci stały się trochę bardziej dziećmi i podkręcimy lekko ich ciekawość świata! 
        Formuła lastag challenge polega na wprowadzeniu elementu grywalizacji pomiędzy grupami podczas całego turnusu. 
        Będą dyscypliny drużynowe oraz indywidualne. 
        Każdego dnia będziemy mieli inną konkurencję obowiązkową (LASTAG GAME) oraz konkurencje do wyboru! 
        Jeżeli ktoś nie będzie chciał brać udziału w jednych warsztatach to będzie mógł się zająć czymś innym. 
        Aby dodatkowo podkręcić atmosferę dzieci nie będą konkurować o pietruszkę! Gra będzie się odbywać o dość wysoką stawkę (ok 10 kg cukierków), vouchery do LASTAG-u lub o złotą kartę LASTAG-u czyli pół roku korzystania z atrakcji lastag-u gratis*! 
        Dodatkowo dzieci będą nagradzane odznakami za wypełnianie naszych CHALLENGE-ów!
        Poniżej prezentujemy spis wszystkich wyzwań. 
        Każde wyzwanie to niezapomniane wspomnienie dla młodego człowieka.
      <ol>
        <li>Gościu ( koleżeński, pomocny)</li>
        <li>zbalansowana dieta ( zjadanie całych posiłków)</li>
        <li>czyścioch ( mycie rąk przed posiłkiem, nie brudzenie przy jedzeniu i sprząta po warsztatach )</li>
        <li>złota rączka ( uczestniczy do końca w warsztatach technicznych z zaangażowaniem) </li>
        <li>artysta ( kreatywny, tworzy piękne prace) </li>
        <li>mistrz pif paf – najwięcej trafień w lasertag</li>
        <li>zwolniony metabolizm – wytrzymał najdłużej na warsztatach z nic nie robienia </li>
        <li>kwiat polskiej młodzieży CHŁOPCY ( kulturalny, zna wszystkie magiczne słowa ) </li>
        <li>kwiat polskiej młodzieży DZIEWCZYNKI ( kulturalne, znają wszystkie magiczne słowa )</li>
        <li>gekon ( lubi ściankę i wspinanie, wchodzi na sama gore lub stara się przełamać lęk wysokości) </li>
        <li>spiderman - zaliczył wszystkie konkurencje wspinaczkowe </li>
        <li>sprinter ( najszybszy na pomarańczowej trasie – 3 poziomy)</li>
        <li>taternik ( najszybszy druga trasa na malej ściance) </li>
        <li>klikacz – najlepszy wynik na klikaczu </li>
        <li>misiek/miśka – cały dzień wszyscy mówią do niego misiek/miśka</li>
        <li>grażyna – cały dzień w papilotach, szlafroku – przebranie na własną rękę)</li>
        <li>brick master ( tworzy budowle z klocków ) </li>
        <li>krzysztof kolumb ( na wyjściach słucha się, ustawia w pary itp.)</li>
        <li>ziomek ( rozwiązuje konflikty kolegów, w razie potrzeby powiadamia wychowawców) </li>
        <li>prawa ręka ( pomaga sprzątać po obiadach i warsztatach) </li>
        <li>leon zawodowiec – mistrz gry w mafię, najwięcej zebranych naboi za wygraną </li>
        <li>rain man – mistrz rumikub </li>
        <li>nawrócenie ( był niegrzeczny ale poprawił swoje zachowanie) </li>
        <li>90's kid – dziecko, które nie korzysta w trakcie dnia z telefonu komórkowego</li>
        <li>yogin – wykonał challanange od instruktora jogi</li>
        <li>milczek ( nie odzywa się cały dzień – komunikacja za pomocą kartek – rodzice muszą poświadczyć )</li>
        <li>aniołek ( super grzeczne dziecko, bez skazy) </li>
        <li>odpadł z lastag game na poziomie 5</li>
        <li>odpadł z lastag game na poziomie 4</li>
        <li>odpadł z lastag game na poziomie 3</li>
        <li>odpadł z lastag game na poziomie 2</li>
        <li>odpadł z lastag game na poziomie 2</li>
        <li>wicemistrz lastag game</li>
        <li>mistrz lastag game </li>
        <li>na wspak – cały dzień w ubraniach na „drugą stronę” </li>
        <li>mistrz przebieranek – cały dzień w śmiesznej czapce – czapki do wyboru będą dostępne na recepcji</li>
        <li>król przebieranek - cały dzień podczas dnia z wyjściem z lokalu w śmiesznej czapce</li>
        <li>Klasowy Dyżurny – woła dzieci do rodziców podczas pory odbioru </li>
        <li>flash challange 1 – trasa wspinaczkowa we flashu </li>
        <li>flash challange 2</li>
        <li>flash challange 3</li>
        <li>mistrz flash challange – wszystkie poziomy zaliczone </li>
        <li>kurczak – cały dzień na słowo kurczak zaczynasz zachowywać się jak kurczak</li>
        <li>Robot! - cały dzień zachowuje się jak Robot! </li>
        <li>Piątunia - System piąteczek! - dajemy badziki – piateczki za jakieś fajne akcje! </li>
        <li>piąteczka – 10 piątuni </li>
        <li>cytrynowy johnson – wypija szklankę soku z cytryny i się uśmiecha</li>
        <li>da vinci – najpiękniejsze obrazy malowane kredą w salce w której urzędujecie</li>
        <li>wieżomir – dla budowniczych najwyższej konstrukcji z megaklocków – technika dowolna – jednorazowo podchodzi jeden zespół maks 5 osób</li>
        <li>ekipa porządkowa – wyzwanie obowiązkowe dla wszystkich rodzin – codziennie dwie rodziny rywalizują o miano najbardziej porządkowej ekipy</li>
        <li>Jan serce - zrób coś miłego dla rodziców żeby im podziękować za tak fajne ferie - potwierdzają rodzice</li>
        <li>Pan Maruda – niszczyciel dobrej zabawy, przeszkadza w warsztatach, sabotuje drużynę</li>
        <li>no challenge challenge – wyzwanie polegające na nie braniu udziału w żadnym challenge-u</li>
        <li>jeden z dziesięciu – omnibus, najlepszy w gry wiedzowe.</li>
      </ol>
      </div>

      <h2>Kadra</h2>
      <Crew />
    </div>
  </div>
</template>