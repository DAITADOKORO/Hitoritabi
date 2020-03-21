class TripsController < ApplicationController
  def index
    @search = Trip.search(params[:q])
    @topics = @search.result
    @trips = Trip.all
  end

  def show
  end

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      redirect_to trips_path
    else
      render :new
    end
  end

  def new
    @trip = Trip.new
  end

  private

  def trip_params
    params.require(:trip).permit(:title, :article)
  end
end
