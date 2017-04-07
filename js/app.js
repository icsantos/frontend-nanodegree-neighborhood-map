/* global ko:true */
//http://www.latlong.net/convert-address-to-lat-long.html
var placesOfInterest = [
  {
    name: "Missouri History Museum",
    position: {lat: 38.645316, lng: -90.285838},
    address: "5700 Lindell Blvd, St. Louis, MO 63112",
    website: "http://www.mohistory.org",
    description: "Free historical museum with a focus on the state along with general American and Western themes",
    image: "mohistory.jpg",
    imageSrc: "http://members.explorestlouis.com/images/memberImages/mohist1.jpg"
  },
  {
    name: "Saint Louis Art Museum",
    position: {lat: 38.639100, lng: -90.294649},
    address: "1 Fine Arts Dr, St. Louis, MO 63110",
    website: "http://www.slam.org",
    description: "Grand beaux arts building & modern extension housing over 30,000 works of art, with free admission",
    image: "slam.jpg",
    imageSrc: "http://members.explorestlouis.com/images/memberImages/slam1.jpg"
  },
  {
    name: "Saint Louis Science Center",
    position: {lat: 38.628663, lng: -90.270577},
    address: "5050 Oakland Ave, St. Louis, MO 63110",
    website: "http://www.slsc.org",
    description: "Great place for kids of all ages eager to learn about science.  Also check out the Omnimax Theatre and the James S McDonnell Planetarium.",
    image: "slsc.jpg",
    imageSrc: "http://members.explorestlouis.com/images/memberImages/Saint%20Louis%20Science%20Center.jpg"
  },
  {
    name: "Saint Louis Zoo",
    position: {lat: 38.636547, lng: -90.291569},
    address: "1 Government Dr, St. Louis, MO 63110",
    website: "http://www.stlzoo.org",
    description: "Located on 90 acres in beautiful Forest Park, the Zoo is home to more than 560 species of animals, many of them rare and endangered. It is one of the few free zoos in the nation.",
    image: "stlzoo.jpg",
    imageSrc: "http://members.explorestlouis.com/images/memberImages/zoo1.jpg"
  },
  {
    name: "The Muny",
    position: {lat: 38.640790, lng: -90.280688},
    address: "1 Theatre Dr, St. Louis, MO 63112",
    website: "http://www.muny.org",
    description: "The Muny is the largest outdoor musical theatre in North America.  Each summer 7 exciting Broadway-style musicals can be enjoyed under the stars!",
    image: "muny.jpg",
    imageSrc: "http://www.muny.org/about-us/last-night-at-the-muny/set72157645556988268"
  },
  {
    name: "Missouri Botanical Garden",
    position: {lat: 38.615649, lng: -90.258231},
    address: "4344 Shaw Blvd, St. Louis, MO 63110",
    website: "http://www.missouribotanicalgarden.org",
    description: "Garden in St. Louis renowned for its fundamental botanical research, horticultural displays and education programs.",
    image: "missouribotanicalgarden.jpg",
    imageSrc: "http://c1.staticflickr.com/5/4017/4474208128_54f79ff1a1_b.jpg"
  },
  {
    name: "Gateway Arch",
    position: {lat: 38.628744, lng: -90.183859},
    address: "100 Washington Ave, St. Louis, MO 63102",
    website: "http://www.gatewayarch.com",
    description: "Curved, 630-ft.-tall monument celebrating US western expansion, with views from the top & a museum",
    image: "gatewayarch.jpg",
    imageSrc: "https://commons.wikimedia.org/wiki/File:St_Louis_night_expblend.jpg"
  },
  {
    name: "City Museum",
    position: {lat: 38.633608, lng: -90.200436},
    address: "750 N 16th St, St. Louis, MO 63103",
    website: "http://www.citymuseum.org",
    description: "Constantly evolving art installation, playground & discovery center made from found objects",
    image: "citymuseum.jpg",
    imageSrc: "http://members.explorestlouis.com/images/memberImages/cityMuseum2.jpg"
  },
  {
    name: "Old Courthouse",
    position: {lat: 38.625674, lng: -90.189274},
    address: "11 N 4th St, St. Louis, MO 63102",
    website: "http://www.gatewayarch.com/experience/old-courthouse.aspx",
    description: "Former slave Dred Scott sued for freedom in this courthouse, now offering tours & history exhibits",
    image: "",
    imageSrc: "https://commons.wikimedia.org/wiki/File:STL_Old_Courthouse_JNEM.jpg"
  },
  {
    name: "Anheuser-Busch Brewery",
    position: {lat: 38.600291, lng: -90.213532},
    address: "1200 Lynch St, St. Louis, MO 63118",
    website: "http://www.budweisertours.com/locations/st-louis-missouri.html",
    description: "The brewery, opened in 1852 by German immigrant Adolphus Busch, is designated as a National Historic Landmark District",
    image: "anheuserbusch.jpg",
    imageSrc: "http://members.explorestlouis.com/images/memberImages/ab2.jpg"
  }
];

var Place = function(place) {
  this.name = ko.observable(place.name);
  this.position = ko.observable(place.position);
  this.address = ko.observable(place.address);
  this.website = ko.observable(place.website);
  this.description = ko.observable(place.description);
  this.image = ko.observable(place.image);
};

var ViewModel = function() {
  var self = this;

  this.places = ko.observableArray([]);
  placesOfInterest.forEach(function(place) {
    self.places.push(new Place(place));
  });
};

ko.applyBindings(new ViewModel());
