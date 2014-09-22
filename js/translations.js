angular.module('registries')
.config(['$translateProvider', function($translateProvider) {
	$translateProvider.preferredLanguage('cz');
	$translateProvider.translations('sk', {
		"schema.people.membershipFeeInfo.title":"Členské príspevky",
		"schema.people.membershipFeeInfo.membershipType":"Typ členského príspevku",
		"schema.people.membershipFeeInfo.paymentFrequency":"Frekvencia platby",
		"schema.people.membershipFeeInfo.membershipFee":"Výška členského príspevku",
		"schema.people.membershipFeeInfo.notes":"Poznámka",

		
		"schema.fees.new":"Nový príspevok",
		"schema.fees.baseData":"Základné údaje",
		"schema.fees.baseData.member":"Člen",
		"schema.fees.baseData.membershipFee":"Výška príspevku",
		"schema.fees.baseData.setupDate":"Dátum vystavenia",
		"schema.fees.baseData.variableSymbol":"Variabilný symbol",
		"schema.fees.baseData.dueDate":"Dátum splatnosti",
		"schema.fees.baseData.membershipFeePaid":"Zaplatená čiastka",
		"schema.fees.baseData.dateOfPayment":"Dátum zaplatenia",
		"schema.fees.baseData.notes":"Poznámka",
		"schema.fees.baseData.feePaymentStatus":"Stav",
		"schema.fees.baseData.feePaymentStatus.paid":"Zaplatené",
		"schema.fees.baseData.feePaymentStatus.unpaid":"Nezaplatené",
		
		"schema.fees.listFields.name":"Meno",
		"schema.fees.listFields.surName":"Priezvisko",
		"schema.fees.listFields.membershipFee":"Výška príspevku",
		"schema.fees.listFields.dueDate":"Dátum splatnosti",
		"schema.fees.listFields.variableSymbol":"Variabilný symbol",
		"schema.fees.listFields.membershipFeePaid":"Zaplatená čiastka",
		"schema.fees.listFields.dateOfPayment":"Dátum zaplatenia",
		"schema.fees.listFields.feePaymentStatus":"Stav",

		"schema.mailTemplate.basedata.title":"Základné údaje",
		"schema.mailTemplate.basedata.name":"Názov vzoru",
		"schema.mailTemplate.basedata.subject":"Predmet vzoru",
		"schema.mailTemplate.basedata.text":"Text vzoru",
		"schema.mailTemplate.basedata.html":"HTML vzor",
		"schema.mailTemplate.listFields.title":"Názov vzoru",
		

		"schema.people.isActivePlayer":"Je aktívny hráč",
		"schema.people.isActivePlayer.yes":"Áno",
		"schema.people.isActivePlayer.no":"Nie",
		"schema.people.isActiveCoach":"Je aktívny tréner",
		"schema.people.isActiveCoach.yes":"Áno",
		"schema.people.isActiveCoach.no":"Nie",
		"schema.people.isActiveAgent":"Je aktívny agent",
		"schema.people.isActiveAgent.yes":"Áno",
		"schema.people.isActiveAgent.no":"Nie",
		"schema.people.isActiveRepresentative":"Je aktívny funkcionár",
		"schema.people.isActiveRepresentative.yes":"Áno",
		"schema.people.isActiveRepresentative.no":"Nie",
		"schema.people.isProAm":"Je PRO-AM",
		"schema.people.isProAm.yes":"Áno",
		"schema.people.isProAm.no":"Nie",
		"schema.people.hockeyPlayerInfo.category":"Kategórie sútaže",
    	"schema.people.hockeyPlayerInfo.category.extraliga":"Extraliga",
    	"schema.people.hockeyPlayerInfo.category.nhl":"1.NHL",
    	"schema.people.hockeyPlayerInfo.category.foreign":"Zahraničie",
    	"schema.people.hockeyPlayerInfo.dressSize":"Veľkosť",
    	"schema.people.hockeyPlayerInfo.footSize":"Veľkosť topánky",
    	"schema.people.hockeyPlayerInfo.registredAgentName":"Meno registrovaného agenta",
		"schema.people.hockeyPlayerInfo.nonregisteredAgentName":"Meno neregistrovaného agenta",
		"schema.people.stateOfPerson":"Status",
		"schema.people.stateOfPerson.active":"Aktívny",
		"schema.people.stateOfPerson.inactive":"Neaktívny",
		"schema.fees.view":"Členský príspevok",
		"schema.fees.search":"Členský príspevok",
		
		
		
		"schema.org.new":"Nová organizácia",
		"schema.org.view":"Organizácia",
		"schema.member.new":"Nový člen",
		"schema.member.view":"Člen",
		"schema.org.baseData.name": "Názov organizácie",
		"schema.org.listFields.id": "ID",
		"schema.org.listFields.name": "Meno",
		"schema.people.listFields.surName":"Priezvisko",
		"schema.people.listFields.name":"Meno",
		"schema.people.listFields.id":"Registračné číslo",
		"schema.people.baseData": "Základné informácie",
		"schema.people.baseData.identifier": "Identifikátor",
		"schema.people.baseData.bornNumber":"Rodné číslo",
		"schema.people.baseData.name": "Meno",
		"schema.people.baseData.surName": "Priezvisko",
		"schema.people.baseData.bornName": "Rodné priezvisko",
		'schema.people.baseData.title': 'Titul',
		'schema.people.baseData.birthDate': 'Dátum narodenia',
		'schema.people.baseData.nationality': 'Štátna príslušnoť',
		'schema.people.baseData.gender': 'Pohlavie',
		"schema.people.photoInfo":"Fotografie",
		"schema.people.photoInfo.photo":"Fotografia",
		"schema.people.contactInfo":"Kontaktné údaje",
		"schema.people.contactInfo.street":"Ulica",
		"schema.people.contactInfo.houseNumber":"Číslo domu",
		"schema.people.contactInfo.city":"Obec",
		"schema.people.contactInfo.zipCode":"PSČ",
		"schema.people.contactInfo.country":"Štát",
		"schema.people.contactInfo.phoneNumber":"Telefón",
		"schema.people.contactInfo.mobileNumber":"Mobil",
		"schema.people.contactInfo.mobileNumber2":"Mobil 2",
		"schema.people.contactInfo.email":"E-mail",
		"schema.people.contactInfo.email2":"E-mail 2",
		"schema.people.bankInfo":"Bankové spojenie",
		"schema.people.bankInfo.bankAccount":"Číslo účtu",
		"schema.people.bankInfo.bankCode":"Kód banky",
		"schema.people.bankInfo.iban":"IBAN",
		"schema.people.bankInfo.swift":"SWIFT",
		"schema.people.hockeyPlayerInfo":"Profil hráča",
		"schema.people.hockeyPlayerInfo.clubName":"Názov klubu",
		"schema.people.hockeyPlayerInfo.positionName":"Post",
		"schema.people.hockeyPlayerInfo.dressNumber":"Číslo dresu",
		"schema.people.hockeyPlayerInfo.playerHeight":"Výška",
		"schema.people.hockeyPlayerInfo.playerWeight":"Hmotnosť",
		"schema.people.hockeyPlayerInfo.stickHandling":"Držanie hokejky",
		"schema.people.hockeyPlayerInfo.contractDate":"Zmluva zo dňa",
		"schema.people.otherInfo":"Ostatné údaje",
		"schema.people.otherInfo.isPhotoPublic":"Je fotka verejná",
		"schema.people.otherInfo.idCardNumber":"Číslo OP",
		"schema.people.otherInfo.membershipStartDate":"Člen od",
		"schema.people.otherInfo.membershipEndDate":"Člen do",
		"schema.people.otherInfo.note":"Poznámka"
	});

	$translateProvider.translations('cz', {
		"schema.people.membershipFeeInfo.title":"Členské příspěvky",
		"schema.people.membershipFeeInfo.membershipType":"Typ členského příspěvku",
		"schema.people.membershipFeeInfo.paymentFrequency":"Frekvence platby",
		"schema.people.membershipFeeInfo.membershipFee":"Výše členského příspěvku",
		"schema.people.membershipFeeInfo.notes":"Poznámka",

	
		"schema.fees.new":"Nový príspevok",
		"schema.fees.baseData":"Základné údaje",
		"schema.fees.baseData.member":"Člen",
		"schema.fees.baseData.membershipFee":"Výška príspevku",
		"schema.fees.baseData.setupDate":"Dátum vystavenia",
		"schema.fees.baseData.variableSymbol":"Variabilný symbol",
		"schema.fees.baseData.dueDate":"Dátum splatnosti",
		"schema.fees.baseData.membershipFeePaid":"Zaplatená čiastka",
		"schema.fees.baseData.dateOfPayment":"Dátum zaplatenia",
		"schema.fees.baseData.notes":"Poznámka",
		"schema.fees.baseData.feePaymentStatus":"Stav",
		"schema.fees.baseData.feePaymentStatus.paid":"Zaplatené",
		"schema.fees.baseData.feePaymentStatus.unpaid":"Nezaplatené",

		"schema.fees.listFields.name":"Meno",
		"schema.fees.listFields.surName":"Priezvisko",
		"schema.fees.listFields.membershipFee":"Výška príspevku",
		"schema.fees.listFields.dueDate":"Dátum splatnosti",
		"schema.fees.listFields.variableSymbol":"Variabilný symbol",
		"schema.fees.listFields.membershipFeePaid":"Zaplatená čiastka",
		"schema.fees.listFields.dateOfPayment":"Dátum zaplatenia",
		"schema.fees.listFields.feePaymentStatus":"Stav",
		
		"schema.mailTemplate.basedata.title":"Základné údaje",
		"schema.mailTemplate.basedata.name":"Názov vzoru",
		"schema.mailTemplate.basedata.subject":"Predmet vzoru",
		"schema.mailTemplate.basedata.text":"Text vzoru",
		"schema.mailTemplate.basedata.html":"HTML vzor",
		"schema.mailTemplate.listFields.title":"Názov vzoru",

		
		"schema.people.isActivePlayer":"Je aktivní hráč",
		"schema.people.isActivePlayer.yes":"Áno",
		"schema.people.isActivePlayer.no":"Ne",
		"schema.people.isActiveCoach":"Je aktivní trenér",
		"schema.people.isActiveCoach.yes":"Áno",
		"schema.people.isActiveCoach.no":"Ne",
		"schema.people.isActiveAgent":"Je aktivní agent",
		"schema.people.isActiveAgent.yes":"Áno",
		"schema.people.isActiveAgent.no":"Ne",
		"schema.people.isActiveRepresentative":"Je aktivní funkcionár",
		"schema.people.isActiveRepresentative.yes":"Áno",
		"schema.people.isActiveRepresentative.no":"Ne",
		"schema.people.isProAm":"Je PRO-AM",
		"schema.people.isProAm.yes":"Áno",
		"schema.people.isProAm.no":"Ne",
		"schema.people.hockeyPlayerInfo.category":"Kategorie soutěže",
    	"schema.people.hockeyPlayerInfo.category.extraliga":"Extraliga",
    	"schema.people.hockeyPlayerInfo.category.nhl":"1.NHL",
    	"schema.people.hockeyPlayerInfo.category.foreign":"Zahraničie",
    	"schema.people.hockeyPlayerInfo.dressSize":"Velikost",
    	"schema.people.hockeyPlayerInfo.footSize":"Číslo boty",
    	"schema.people.hockeyPlayerInfo.registredAgentName":"Jméno registrovaného agenta",
		"schema.people.hockeyPlayerInfo.nonregisteredAgentName":"Jméno neregistrovaného agenta",
		"schema.people.stateOfPerson":"Status",
		"schema.people.stateOfPerson.active":"Aktivní",
		"schema.people.stateOfPerson.inactive":"Neaktivní",
		"schema.fees.view":"Členský príspevok",
		"schema.fees.search":"Členský príspevok",




	
		"schema.org.new":"Nová organizace",
		"schema.org.view":"Organizace",
		"schema.member.new":"Nový člen",
		"schema.member.view":"Člen",
		"schema.org.baseData.name": "Název organizace",
		"schema.org.listFields.id": "ID",
		"schema.org.listFields.name": "Jméno",
		"schema.people.listFields.surName":"Příjmení",
		"schema.people.listFields.name":"Jméno",
		"schema.people.listFields.id":"Registračné číslo",
		'schema.people.baseData': 'Základní informace',
		'schema.people.baseData.identifier': 'Identifikátor',
		'schema.people.baseData.name': 'Jméno',
		'schema.people.baseData.surName': 'Příjmení',
		'schema.people.baseData.bornName': 'Rodné příjmení',
		"schema.people.baseData.bornNumber":"Rodné číslo",
		'schema.people.baseData.title': 'Titul',
		'schema.people.baseData.birthDate': 'Datum narození',
		'schema.people.baseData.nationality': 'Státni příslušnost',
		'schema.people.baseData.gender': 'Pohlaví',
		"schema.people.photoInfo":"Fotografie",
		"schema.people.photoInfo.photo":"Fotografie",
		"schema.people.contactInfo":"Kontaktní údaje",
		"schema.people.contactInfo.street":"Ulice",
		"schema.people.contactInfo.houseNumber":"Číslo domu",
		"schema.people.contactInfo.city":"Obec",
		"schema.people.contactInfo.zipCode":"PSČ",
		"schema.people.contactInfo.country":"Stát",
		"schema.people.contactInfo.phoneNumber":"Telefon",
		"schema.people.contactInfo.mobileNumber":"Mobil",
		"schema.people.contactInfo.mobileNumber2":"Mobil 2",
		"schema.people.contactInfo.email":"E-mail",
		"schema.people.contactInfo.email2":"E-mail 2",
		"schema.people.bankInfo":"Bankovní spojení",
		"schema.people.bankInfo.bankAccount":"Číslo účtu",
		"schema.people.bankInfo.bankCode":"Kód banky",
		"schema.people.bankInfo.iban":"IBAN",
		"schema.people.bankInfo.swift":"SWIFT",
		"schema.people.hockeyPlayerInfo":"Profil hráče",
		"schema.people.hockeyPlayerInfo.clubName":"Název klubu",
		"schema.people.hockeyPlayerInfo.positionName":"Post",
		"schema.people.hockeyPlayerInfo.dressNumber":"Číslo dresu",
		"schema.people.hockeyPlayerInfo.playerHeight":"Výška",
		"schema.people.hockeyPlayerInfo.playerWeight":"Hmotnost",
		"schema.people.hockeyPlayerInfo.stickHandling":"Držení hole",
		"schema.people.hockeyPlayerInfo.contractDate":"Smlouva ze dne",
		"schema.people.otherInfo":"Ostatní údaje",
		"schema.people.otherInfo.isPhotoPublic":"Je fotka veřejná",
		"schema.people.otherInfo.idCardNumber":"Číslo OP",
		"schema.people.otherInfo.membershipStartDate":"Člen od",
		"schema.people.otherInfo.membershipEndDate":"Člen do",
		"schema.people.otherInfo.note":"Poznámka"
		
	});
}]);
