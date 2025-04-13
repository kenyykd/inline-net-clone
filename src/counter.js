const Main = () => ({
  showSection: "chain-section",

  changeSection(e) {
    const id = e.target.dataset.id;
    this.showSection = id;
    const li = e.target.parentNode.querySelectorAll("li");
    li.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  },
});

export default Main;
