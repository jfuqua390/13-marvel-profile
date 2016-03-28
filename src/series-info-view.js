
export default class SeriesInfoView {
  constructor(el, data) {
    this.el = el;
    this.data = data;

    this.renderImage();
    this.renderTitle();
    this.renderYears();
    this.renderCreators();
  }

  renderImage() {
    this.el.querySelector(`.sidebar__pic`).innerHTML =
    `<img src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}"
     alt="No Img found" className="sidebar__img"/>`;
  }

  renderTitle() {
    this.el.querySelector(`.sidebar__title`).innerText = this.data.title;
  }

  renderYears() {
    this.el.querySelector(`.sidebar__years`).innerText = `${this.data.startYear} - ${this.data.endYear}`;
  }

  renderCreators() {
    this.data.creators.items.forEach((creator) => {
      const newListItem = document.createElement(`li`);
      newListItem.innerText = creator.name;
      this.el.querySelector(`.sidebar__creator-list`).appendChild(newListItem);
    });
  }
}
