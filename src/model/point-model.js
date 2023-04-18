import { points } from '../mocks/points';
import { destinations } from '../mocks/destinations';
import { offersByType } from '../mocks/offer';

export default class PointModel {
  constructor() {
    this.points = points;
    this.destinations = destinations;
    this.offersByType = offersByType;
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffersByType() {
    return this.offersByType;
  }
}
