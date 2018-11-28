<template>
  <section class="template">
    <div class="card-container">
      <div class="backround-img">
        <div class="backgroun-frame">
          <div class="background-color">
            <section class="event-description=container">
              <h3 class="invition-line" contenteditable="true">{{businessName}} INVITE YOU</h3>
              <h1 class="event-name" contenteditable="true">{{eventName}}</h1>
              <p class="short-description" contenteditable="true">{{shortDescription}}</p>
            </section>
            <section class="event-details-container">
              <div class="event-details">
                <p>{{date}}</p>
                <p>{{time}}</p>
                <p>{{address}}</p>
              </div>
            </section>
            <section class="rsvp-container">
              <div class="rsvp">
                <h3 class="rsvp-title">RSVP</h3>
                <p class="rsvp-sub-title">how many guests</p>
                <input class="guests-name" type="text" placeholder="full name" required>
                <input class="guests-mobile" type="number" placeholder="mobile num" required>
                <br>
                <button class="btn-ariving">ariving</button>
                <button class="btn-not-ariving">not ariving</button>
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
/* h1 {
  /* font-size: 3rem; */
  /* letter-spacing: 2px; }
} */
button {
  cursor: pointer;
}
.card-container {
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
  width: 320px;
  height: 450px;
  border: 3px solid white;
  /* margin: auto; */
}
.social-media-box {
  display: inline-block;
  /* flex-direction: row; */
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin: 0 10px;
  background-color: #e5e5e5;
  transition: background-color 0.5s;
}
.social-media-box:hover {
  cursor: pointer;
  background-color: #516fad;
}
</style>


