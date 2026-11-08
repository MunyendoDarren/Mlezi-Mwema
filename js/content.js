/* All user-facing text lives here. EN and SW must keep identical structure:
   run `python3 scripts/check_translations.py` before every commit. */
var APPS = [
 {name:'WhatsApp',
  en:{risk:'Strangers can add children to groups; private chats are hard to supervise.',tip:'Settings > Privacy > Groups: choose "My contacts". Hide profile photo from "Everyone". Turn on two-step verification.'},
  sw:{risk:'Watu wasiojulikana wanaweza kumweka mtoto kwenye vikundi; mazungumzo ya faragha ni magumu kufuatilia.',tip:'Mipangilio > Faragha > Vikundi: chagua "Anwani zangu". Ficha picha ya wasifu kwa "Kila mtu". Washa uthibitishaji wa hatua mbili.'}},
 {name:'TikTok',
  en:{risk:'Endless feed, public comments and messages from unknown accounts.',tip:'Use Family Pairing to link your account. Set the account to private and limit who can send messages or comment.'},
  sw:{risk:'Video zisizoisha, maoni ya hadharani na jumbe kutoka kwa akaunti zisizojulikana.',tip:'Tumia Family Pairing kuunganisha akaunti yako. Fanya akaunti iwe ya faragha na udhibiti nani anaweza kutuma jumbe au kutoa maoni.'}},
 {name:'Instagram',
  en:{risk:'Direct messages, location tags and pressure around photos and appearance.',tip:'Use Teen Accounts and supervision. Keep the account private, switch off location tags, restrict who can message.'},
  sw:{risk:'Jumbe za moja kwa moja, kuweka eneo kwenye picha na shinikizo kuhusu picha na mwonekano.',tip:'Tumia Teen Accounts na usimamizi. Weka akaunti ya faragha, zima eneo kwenye picha, na weka kikomo cha nani anaweza kutuma ujumbe.'}},
 {name:'YouTube',
  en:{risk:'Unsuitable videos and open comment sections.',tip:'Use YouTube Kids for young children, or a supervised experience through Family Link for older ones.'},
  sw:{risk:'Video zisizofaa na sehemu za maoni zilizo wazi.',tip:'Tumia YouTube Kids kwa watoto wadogo, au "supervised experience" kupitia Family Link kwa wakubwa kidogo.'}},
 {name:'Snapchat',
  en:{risk:'Disappearing messages and Snap Map can expose location and hide evidence.',tip:'Use Family Center to see who your child talks to. Turn on Ghost Mode in Snap Map. Limit who can contact them.'},
  sw:{risk:'Jumbe zinazopotea na Snap Map vinaweza kufichua eneo na kuficha ushahidi.',tip:'Tumia Family Center kuona mtoto anaongea na nani. Washa Ghost Mode kwenye Snap Map. Weka kikomo cha nani anaweza kuwasiliana naye.'}},
 {name:'Roblox',
  en:{risk:'Chat with strangers inside games; pressure to buy items or "trade".',tip:'Link a parent account, set a Parental PIN, restrict chat and spending.'},
  sw:{risk:'Mazungumzo na watu wasiojulikana ndani ya michezo; shinikizo la kununua vitu au "kubadilishana".',tip:'Unganisha akaunti ya mzazi, weka PIN ya mzazi, na zuia mazungumzo na matumizi ya pesa.'}},
 {name:'Discord',
  en:{risk:'Open servers, private messages and voice chat with unknown people.',tip:'Use Family Center. Enable safe direct messaging filters and only allow messages from friends.'},
  sw:{risk:'Seva wazi, jumbe za faragha na mazungumzo ya sauti na watu wasiojulikana.',tip:'Tumia Family Center. Washa vichujio vya jumbe salama na ruhusu jumbe kutoka kwa marafiki pekee.'}}
];

var CONTENT = {
en:{
 title:"A Parent's Guide to Children's Online Safety",
 tagline:'Understand the apps your children use, spot grooming warning signs early, and set up parental controls. Talking with your child matters more than any tool.',
 privacy:'This page collects no data, has no trackers and works offline. Your checklist is never saved or sent anywhere.',
 h:{signs:'Grooming warning signs',apps:'Popular apps: risks and safer settings',controls:'Parental controls',check:'Your safety checklist',act:'If you are worried',help:'Where to get help'},
 signsIntro:'Grooming is when an adult builds trust with a child to exploit them. One sign alone may mean nothing; a pattern deserves attention.',
 signs:[
  ['Secrecy about devices','Hides the screen, deletes chats, or has accounts you do not know about.'],
  ['Unexplained gifts or money','Airtime, data bundles, M-Pesa or game credits from someone online.'],
  ['Pushed to private spaces','Someone asks the child to leave a public game or chat for a private app.'],
  ['Flattery and "our secret"','An older "friend" who says the bond is special and must be hidden from parents.'],
  ['Requests for photos or details','Pictures, school, home location or daily routine.'],
  ['Withdrawal and mood changes','Pulls away from family, anxious after being online, sleep changes.'],
  ['Heavy late-night contact','Constant messages at night or demands for instant replies.']],
 controls:[
  {name:'Android: Google Family Link',steps:['Install Family Link on your phone and link your child\u2019s account.','Approve or block app installs.','Set daily limits and bedtime.','Use SafeSearch and content filters.']},
  {name:'iPhone: Screen Time',steps:['Settings > Screen Time > set up for a child via Family Sharing.','Turn on Content & Privacy Restrictions.','Set Communication Limits and app limits.','Require approval for downloads (Ask to Buy).']},
  {name:'Home network and accounts',steps:['Use a family DNS filter on the router, for example Cloudflare 1.1.1.3.','Give each child their own account, never shared logins.','Use strong unique passwords and two-step verification; keep the recovery email yourself.','Keep devices out of bedrooms at night.']}],
 checklist:['Accounts are private and the age used is correct.','Location sharing is off in apps and photos.','Only friends can message or add my child.','Parental supervision is turned on where available.','App installs need my approval.','Passwords are strong and unique; I hold the recovery details.','We have family rules for screen time and sharing.','My child knows they can tell me anything without punishment.','My child knows how to block and report.','We review settings every three months.'],
 progress:'{n} of {t} done',
 act:['Stay calm. Tell your child it is not their fault and thank them for telling you.','Do not delete anything. Take screenshots of usernames, messages, links and dates.','Block the account and report it inside the app.','Report to the authorities (see below). Do not confront the person yourself.','Keep supporting your child; consider a counsellor if they seem distressed.'],
 help:[['Childline Kenya: 116','Free helpline for children and adults reporting abuse.'],['Police: 999 or 112','For immediate danger. You can also report to the nearest police station or the DCI cybercrime unit.'],['In-app reporting','Every major platform has a report button on profiles and messages.']],
 disclaimer:'Menus and features change often. Check each app\u2019s official help centre and confirm phone numbers locally. This guide is educational and not legal advice.'
},
sw:{
 title:'Mwongozo wa Mzazi: Usalama wa Watoto Mtandaoni',
 tagline:'Elewa programu wanazotumia watoto wako, tambua dalili za unyemelezi mapema, na weka udhibiti wa wazazi. Kuzungumza na mtoto ni muhimu kuliko zana yoyote.',
 privacy:'Ukurasa huu hauhifadhi taarifa, hauna vifuatiliaji na unafanya kazi bila intaneti. Orodha yako haihifadhiwi wala kutumwa popote.',
 h:{signs:'Dalili za unyemelezi (grooming)',apps:'Programu maarufu: hatari na mipangilio salama',controls:'Udhibiti wa wazazi',check:'Orodha yako ya usalama',act:'Ukiwa na wasiwasi',help:'Mahali pa kupata msaada'},
 signsIntro:'Unyemelezi ni pale mtu mzima anapojenga imani kwa mtoto ili amnyonye. Dalili moja pekee inaweza isimaanishe kitu; mfululizo wa dalili unastahili kuzingatiwa.',
 signs:[
  ['Usiri kuhusu vifaa','Anaficha skrini, anafuta mazungumzo, au ana akaunti usizozijua.'],
  ['Zawadi au pesa zisizoelezeka','Muda wa maongezi, bando, M-Pesa au vitu vya michezo kutoka kwa mtu wa mtandaoni.'],
  ['Kushawishiwa kuhamia sehemu za faragha','Mtu anamtaka mtoto aondoke kwenye mchezo au mazungumzo ya wazi aende kwenye programu ya faragha.'],
  ['Sifa nyingi na "siri yetu"','"Rafiki" mkubwa kiumri anayesema urafiki wenu ni maalum na lazima ufichwe kwa wazazi.'],
  ['Maombi ya picha au taarifa binafsi','Picha, shule, makazi au ratiba ya kila siku.'],
  ['Kujitenga na mabadiliko ya hisia','Anajitenga na familia, ana wasiwasi baada ya kutumia mtandao, usingizi unabadilika.'],
  ['Mawasiliano mengi usiku','Jumbe zisizoisha usiku au shinikizo la kujibu papo hapo.']],
 controls:[
  {name:'Android: Google Family Link',steps:['Sakinisha Family Link kwenye simu yako na uunganishe akaunti ya mtoto.','Idhinisha au zuia usakinishaji wa programu.','Weka kikomo cha muda wa kila siku na muda wa kulala.','Tumia SafeSearch na vichujio vya maudhui.']},
  {name:'iPhone: Screen Time',steps:['Mipangilio > Screen Time > sanidi kwa mtoto kupitia Family Sharing.','Washa Content & Privacy Restrictions.','Weka Communication Limits na vikomo vya programu.','Hitaji idhini kabla ya kupakua (Ask to Buy).']},
  {name:'Mtandao wa nyumbani na akaunti',steps:['Tumia kichujio cha DNS cha familia kwenye router, mfano Cloudflare 1.1.1.3.','Kila mtoto awe na akaunti yake, usishiriki nywila.','Tumia nywila imara za kipekee na uthibitishaji wa hatua mbili; weka barua pepe ya kurejesha akaunti kwako.','Weka vifaa nje ya vyumba vya kulala usiku.']}],
 checklist:['Akaunti ni za faragha na umri uliotumika ni sahihi.','Kushiriki eneo kumezimwa kwenye programu na picha.','Marafiki pekee wanaweza kumtumia ujumbe au kumwongeza mtoto wangu.','Usimamizi wa mzazi umewashwa pale unapopatikana.','Usakinishaji wa programu unahitaji idhini yangu.','Nywila ni imara na za kipekee; mimi ninashikilia taarifa za kurejesha akaunti.','Tuna sheria za familia kuhusu muda wa skrini na kushiriki taarifa.','Mtoto wangu anajua anaweza kuniambia chochote bila kuadhibiwa.','Mtoto wangu anajua jinsi ya kuzuia na kuripoti.','Tunakagua mipangilio kila baada ya miezi mitatu.'],
 progress:'{n} kati ya {t} zimekamilika',
 act:['Tulia. Mwambie mtoto si kosa lake na mshukuru kwa kukuambia.','Usifute chochote. Piga picha za skrini za majina ya watumiaji, jumbe, viungo na tarehe.','Zuia akaunti hiyo na uiripoti ndani ya programu.','Ripoti kwa mamlaka (tazama hapa chini). Usimkabili mtu huyo mwenyewe.','Endelea kumsaidia mtoto; fikiria mshauri nasaha ikiwa anaonekana kuumia kihisia.'],
 help:[['Childline Kenya: 116','Namba ya msaada bila malipo kwa watoto na watu wazima wanaoripoti unyanyasaji.'],['Polisi: 999 au 112','Kwa hatari ya haraka. Unaweza pia kuripoti kituo cha polisi kilicho karibu au kitengo cha DCI cha uhalifu wa mtandaoni.'],['Kuripoti ndani ya programu','Kila jukwaa kubwa lina kitufe cha kuripoti kwenye wasifu na jumbe.']],
 disclaimer:'Menyu na huduma hubadilika mara nyingi. Angalia kituo rasmi cha msaada cha kila programu na uthibitishe namba za simu kwa eneo lako. Mwongozo huu ni wa elimu, si ushauri wa kisheria.'
}};
