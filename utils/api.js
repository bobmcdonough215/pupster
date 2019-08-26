import axios from "axios";
import { functionExpression } from "@babel/types";
const BASEURL = "https://www.omdbapi.com/?t=";

export default {
  searchBreed: function(breed) {
    return axios.get(BASEURL + (breed) + images);

},

searchRandom: function() {
    return axios.get(BASEURL + "breeds/image/random");
  },

searchList: function(list){
  return axios.get(BASEURL + "breeds/list");
}};
