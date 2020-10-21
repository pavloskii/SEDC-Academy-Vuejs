const firstApplication = {
  data() {
    return {
      subTitle: "Introduction to Vuejs",
      classNumber: 1,
      courses: ["HTML", "CSS", "JS", "Vuejs"],
      showParagraph: true,
    };
  },
  methods: {
    changeSubtitle() {
      this.subTitle = "Vuejs Events";
    },
    reverseString(someString) {
      const reversed = someString.split("").reverse().join("");
      return reversed;
    },
    onSubtitleInput(e) {
      this.subTitle = e.target.value;
    },
  },
};

Vue.createApp(firstApplication).mount("#class1");
