export const joueurService = {
    sauvegarder(nom, costume) {
        localStorage.setItem('nomPerso', nom)
        localStorage.setItem('deguisement', costume)
    },

    charger() {
        return {
            nom: localStorage.getItem('nomPerso'),
            costume: localStorage.getItem('deguisement')
        }
    }
}