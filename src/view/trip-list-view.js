import { createElement } from '../render';

const createTripListTemplate = () => (
  `<ul class="trip-events_list">
  </ul>`
);

export default class TripListView{
  getTemplate() {
    return createTripListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
