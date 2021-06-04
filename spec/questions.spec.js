
describe('Les chaines de caractères : ', function () {//on décrit la fonctionnalité
  // "it" indique le comportement attendu
    it('Donner la taille de la chaine de caractères', function () {
      // on crée un exemple
        var result = tailleString('Ce texte à une certaine taille');
        // on donne le résultat attendu
        expect(result).toEqual(30);
    });

    it('Remplacer le premier e de la chaine par un espace', function () {
      var result = replaceString('Ce texte à une certaine taille');
      // on donne le résultat attendu
      expect(result).toContain('C  texte à une certaine taille');
    });

    it('Concatener les deux chaines de caractères', function () {
      var result = concatString('Bonjour', 'DesCodeuses');
      expect(result).toContain('Bonjour DesCodeuses');
      //Méthode Louiza :
      // var result1 = 'Bonjour';
      // var result2 = 'DesCodeuses';
      // var result = concatString(result1 + ' ' + result2);
      //expect(result).toEqual('Bonjour DesCodeuses');

    });

    it('Afficher le cinquième caractère de la chaine', function () {
      let result = showChar('paprikette');
      expect(result).toEqual('i');

    });

    it('Afficher les 9 premiers caractères', function () {
        let result = showChar9('Hello world !! ');
        expect(result).toMatch('Hello wor');
    });

    it('Mettre en majuscule la chaine', function () {
      let result = majString('Hello world !!');
      expect(result).toEqual('HELLO WORLD !!');
    });

    it('Mettre en minuscule la chaine', function () {
      let result = minString('HELLO WORLD !!');
      expect(result).toEqual('hello world !!');
    });
    it('Supprimer les espaces avant et après la chaine', function () {
      let result = deleteSpace(' Bonjour le monde ');
      expect(result).toEqual('Bonjour le monde');
    });
    it('Afficher true si le parametre d\'entrée de la fonction est de type string', function () {
        let result = getBoolean('àçàçàç');
        // // expect(result).toBeTrue();
        expect(result).toEqual(true);
        // let result = getBoolean(9);
        // expect(result).toEqual('lklklklk');
    });
    it('Afficher l\'extension du fichier', function () {
       let result = typeOfExtension('img.jpg');
       expect(result).toEqual('jpg');
    });
    it('Compter le nombre d\'espace dans la chaine', function () {
       let result = numberSpace(' Bonjour le monde ');
       expect(result).toEqual(4);
    });
    it('Inverser une chaine de caractères', function () {
        let result = reverseString('hello world');
        expect(result).toEqual('dlrow olleh');
    });
});
describe("Les tableaux", function() {
  it('Créer un tableau "langages" contenant "Html", "CSS", "Java", "PHP"', function () {

  });
  it('Créer un tableau "nombres" contenant les nombres de 0 à 5', function () {

  });
  it('Remplacer le troisième élément du tableau par "Javascript"', function () {

  });
  it('Ajouter "Ruby" et "Python" à la fin du tableau', function () {

  });
  it('Ajouter "-2" et "-1" au début du tableau nombres', function () {

  });
  it('Supprimer le premier élément du tableau langages', function () {

  });
  it('Supprimer le dernier élément du tableau langages', function () {

  });
  it('Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux"', function () {

  });
  it('Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule', function () {

  });
  it('Trier le tableau "reseaux_sociaux"', function () {

  });
  it('Bonus : Inverser le tableau "langages"', function () {
      
  });
});
