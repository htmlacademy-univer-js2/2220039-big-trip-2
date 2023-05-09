import {render} from '../render';
import PointModel from '../model/point-model';
import PointView from '../view/point-view';
import PointEditView from '../view/point-edit-view';
//import PointNewView from '../view/point-new-view';
import SortView from '../view/sort-view';
import TripListView from '../view/trip-list-view';
import { getDefaultPoint } from '../util/utils';

export default class Trip {
  constructor({container}) {
    this.component = new TripListView();
    this.container = container;
    this.pointModel = new PointModel();
  }

  init() {

    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offersByType = this.pointModel.getOffersByType();

    render(new SortView(), this.container);
    render(this.component, this.container);
    render(new PointEditView(getDefaultPoint(), destinations, offersByType), this.component.getElement());
    render(new PointEditView(points[1], destinations, offersByType), this.component.getElement());

    for (const point of points){
      render(new PointView(point, destinations, offersByType), this.component.getElement());
    }
  }
}
