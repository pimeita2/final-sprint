<template>
  <section class="template">
    <div class="template-container">
      <div class="backround-img">
        <div class="backgroun-frame">
          <div class="card-container">
            <section class="event-description-container">
              <h3 class="invition-line" contenteditable="true">{{businessName}} INVITE YOU</h3>
              <h1 class="event-name" contenteditable="true">{{eventName}}</h1>
              <p class="short-description" contenteditable="true">{{shortDescription}}</p>
            </section>
            <section class="event-details-container">
              <div class="event-details">
                <p>{{date}}, {{time}}</p>
                <!-- <p>{{time}}</p> -->
                <p>{{address}}</p>
              </div>
            </section>
            <section class="rsvp-container">
              <div class="rsvp">
                <h3 class="rsvp-title">RSVP</h3>
                <p class="rsvp-sub-title">how many guests</p>
                <button class="add">+</button>
                <input class="counter-view">
                <button class="reduce">-</button>
                <br>
                <input class="guests-name" type="text" placeholder="full name" required>
                <input class="guests-mobile" type="number" placeholder="mobile num" required>
                <br>
                <button class="btn-rsvp btn-ariving">ariving</button>
                <button class="btn-rsvp btn-not-ariving">not ariving</button>
              </div>
            </section>
            <section class="contact-container">
              <div class="social-media">
                <a href="#" class="facebook social-media-box">
                  <img src="img/icons/F.png" alt>
                </a>
                <a href="#" class="twitter social-media-box">
                  <img src="images/L.png" alt>
                </a>
                <a href="#" class="be social-media-box">
                  <img src="images/D.png" alt>
                </a>
                <a href="#" class="orange social-media-box">
                  <img src="images/E.png" alt>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      businessName: "meitals",
      eventName: "open your hart to me workshop",
      shortDescription: "discover your true loves and passions in life",
      date: "oct 30 2018",
      time: "20:30",
      address: "23 magal street rishon-lezion"
    };
  }
};
</script>
<style>
button {
  cursor: pointer;
}
.template-container {
  color: rgb(153, 49, 54);
  background-image: url("https://media-public.canva.com/MADFF1IWeQM/2/screen.png");
  display: flex;
  width: 400px;
  height: 560px;
  border: 1px solid gray;
}
.backround-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.backgroun-frame {
  width: 350px;
  height: 480px;
  border: 3px solid white;
  /* margin: auto; */
}
.card-container {
  width: 320px;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.692);
  margin: 10px;
}
.event-description-container {
  padding: 10px;
  /* margin: 10px; */
}
.event-description-container h3 {
  font-size: 14px;
  text-transform: uppercase;
}
.event-description-container h1 {
  margin: 18px;
  font-size: 34px;
  font-weight: bold;
}
.event-description-container p {
  background-color: rgb(153, 49, 54);
  font-size: 12px;
  color: white;
}
.event-details p {
  margin: 5px;
}
.rsvp {
  margin: 10px;
}
.rsvp h3 {
  margin: 16px 0 0 0;
}
.rsvp p {
  margin: 3px;
  font-size: 12px;
}
.counter-view {
  width: 30px;
}
.guests-name {
  margin-top: 5px;
}
.guests-mobile {
  margin-top: 5px;
}
.btn-rsvp {
  /* margin: 8px; */
  border: none;
  color: white;
  padding: 6px 3px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
}

.social-media-box {
  display: inline-block;
  /* flex-direction: row; */
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin: 0 10px;
  background-color: #e5e5e5;
  transition: background-color 0.5s;
}
.social-media-box:hover {
  cursor: pointer;
  background-color: #516fad;
}
</style>


