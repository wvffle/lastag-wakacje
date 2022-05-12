<script setup lang="ts">
const crew = reactive([
  { name: 'Maciek', url: '/crew/maciek.jpg', content: 'Maciek – twórca, wynalazca, założyciel, dręczyciel, wykonawca. Zdobywca Pokojowej Nagrody Nobla i Orderu Uśmiechu i zapewne jeszcze kilku innych orderów i odznaczeń, żadnego jednak nie odebrał bo zawsze miał coś do zrobienia w LASTAG-u. Gdyby nie Adam Mickiewicz to zapewne on napisałby Pana Tadeusza, gdyby nie Neil Armstrong to jego stopa byłaby pierwsza na księżycu, gdyby nie Thomas Edison …aj za długo by opowiadać. Człowiek wielu talentów, nieszablonowy, wszystko wie i wszystko potrafi. Jego pasje to koszenie trawy i rożnego rodzaju gry: granie na zwłokę, na harfie, Xbox i nerwach. Gdyby nie on to wszyscy musielibyśmy iść do „normalnej” pracy.' },
  { name: 'Agata', url: '/crew/agata.jpg', content: 'Agata jest naszym pracownikiem z największym stażem. Niektóre źródła donoszą, że prowadziła swoje pierwsze animacje już na Chrzcie Polski. Agata bardzo lubi wszelkiego rodzaju zwierzęta a w szczególności psy, dlatego nie ma ani jednego. Dla wszystkich grzecznych dzieci ma co najmniej tyle cierpliwości co dla swoich roślinek a dla wszystkich niegrzecznych dzieci… hmmm chyba jednak nie chcecie wiedzieć co Agata robi z niegrzecznymi dziećmi… nie na darmo mówili na nią w jednostkach specjalnych CHUCK NORRIS! Musimy jeszcze dodać iż AGATA WYMIATA!'},
  { name: 'Sylwia', url: '/crew/sylwia.jpg', content: 'Poznajcie Sylwię. Najważniejszym jej zadaniem w firmie jest trzymanie Macieja i jego pomysłów na wodzy. A uwierzcie nam… wcale to nie jest proste zadanie. Oprócz wspaniałego uśmiechu, wysokiej kultury i pięknie długich włosów Sylwia posiada największe doświadczenie w handlu z nas wszystkich!!! Prawdziwa Baba w handlu! Ale niech nie zmyli Was jej miłe przysposobienie!! Bo we wnętrzu to prawdziwa Lwica! Walczy do ostatniej kropli krwi! Serio! I gdyby ponownie rzucili w Lidlu crocsy to jak myślicie kto by je dorwał pierwszy? Zgadza się! To na pewno nie byłaby Sylwia! bo ona nie chodziłaby w crocsach.' },
  { name: 'Kuba', url: '/crew/kuba.jpg', content: 'Kuba to jeden z naszych najbardziej męskich Animatorów – zwłaszcza że jest jedynym naszym męskim animatorem. Interesuje się fotografią, sportem oraz jedzeniem. Nie bez powodu dzieci nazwały go Kubusiem Puchatkiem, gdy ma chwilę wolnego to zawsze znajdziesz go przy jedzeniu. W wolnym czasie oprócz kuchni możesz też go znaleźć na parkiecie w klubie lub na karaoke. Lubi śpiew oraz taniec. Jest również świetnym fotografem, Jeśli go zapytasz , może wtedy wyjawi światu swój talent. Kuba sprawdza się również dobrze w roli bramkarza, bez problemu namawia dzieci do grania w piłkę.' },
  { name: 'Monika', url: '/crew/monika.jpg', content: 'Monika to nasz najmłodszy pracownik. Bardzo lubi wspinaczkę, roślinki i książki psychologiczne. Monika jest dumną właścicielką siedmiu kotów, na które musi bardzo ciężko pracować, i naszym LASTAGowym kocurem, który nie boi się żadnych wyzwań! W końcu, jako fanka Harry’ego Pottera, nie bez powodu byłaby w Gryffindorze! Monika bez chwili wahania wciągnie grupę dzieci do gry w mafię, namówi je na wspinaczkę, zrobi brokatowe tatuaże albo pomaluje twarz – nawet jeśli efektem jest Pikachu rodem z horroru, a nie bajki dla dzieci…' },
  { name: 'Edyta', url: '/crew/edyta.jpg', content: 'Parlez-vous français? Nie? Luz, my też. Ale, spokojnie! Jeśli na waszą imprezę zawitają znajomi waszego kuzyna z Francji to Edyta od razu się z nimi dogada, bo w końcu to przyszła pani magister filologii francuskiej. Niemniej niech was to nie zmyli, bo jeśli chodzi o gastro-serce to oddane jest ono Italii, makarony w każdym postaci to to co Edyta lubi najbardziej. W czasie wolnym czyta powieści fantasy i zajmuje się kotami. Taaak, to kociara No. 1. Więc jeśli też tak jak ona je lubicie to od razu znajdziecie wspólne tematy. A, i jeszcze jedno. ‘Sto lat’ śpiewane z Edytą będzie najgłośniejszym jakie kiedykolwiek słyszeliście!' },
])

const selected = ref(crew[0])
</script>

<template>
  <div class="relative crew flex justify-center pt-[40px] pb-4">
    <crew-member
      @click="selected = member"
      v-for="member, i in crew"
      :key="member.name"
      :class="['relative cursor-pointer opacity-80 hover:opacity-100 duration-200', selected === member && '!opacity-100']"
      :url="member.url"
      :down="i % 2 === 1"
    />
  </div>

  <div class="pb-12">
    <transition name="crew" mode="out-in">
      <div :key="selected.name" class="flex bg-white px-8 rounded-xl shadow-xl">
        <crew-member :url="selected.url" :down="crew.indexOf(selected) % 2 == 1" :size="250" class="scale-130 -translate-x-14 flex-shrink-0" />
        <div class="w-full flex items-center">{{ selected.content }}</div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="stylus">
.crew > .crew__member
  &:not(:last-child)
    margin-right -50px

  &:nth-child(2n)
    top -40px
    margin-bottom 40px


.crew-enter-active
.crew-leave-active
  transition opacity 0.2s ease-out, transform 0.2s ease-out

.crew-enter-from
.crew-leave-to 
  opacity 0

.crew-enter-from
  transform translateY(-1rem)

.crew-leave-to 
  transform translateY(1rem)
</style>