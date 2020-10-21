const firstApplication = {
  data() {
    return {
      subTitle: "Introduction to Vuejs",
      classNumber: 1,
      courses: ["CSS", "JS", "Vuejs", "C#"],
      showParagraph: true,
      fontColor: "red",
      firstName: "Igor",
      lastName: "Pavloski",
      fullName: "Igor Pavloski",
    };
  },
  methods: {
    changeSubtitle() {
      this.subTitle = "Vuejs Events";
      // this.subTitle = this.reverseString("Alooo")
    },
    reverseString(someString) {
      const reversed = someString.split("").reverse().join("");
      return reversed;
    },
    onSubtitleInput(e) {
      this.subTitle = e.target.value;
    },
  },
  watch: {
    firstName(newFirstName) {
      this.fullName = newFirstName + " " + this.lastName;
    },
    lastName(newLastName) {
      this.fullName = this.firstName + " " + newLastName;
    },
  },
  computed: {
    computedFullName() {
      const fullName = `${this.firstName} ${this.lastName}`;
      return fullName;
    },
  },
};

Vue.createApp(firstApplication).mount("#class1");
