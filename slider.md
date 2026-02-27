---
title: Slider
layout: default
description: Slider
intro_image_absolute: false
intro_image_hide_on_mobile: false
---
<!-- <section class="hero-slider-wrapper">
  <div class="hero-slider">
    
    <div class="hero-slide active" style="background-image: url('{{ '/images/home-page-slider/banner_3_gaj_greens_2.webp' | relative_url }}');">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-8">
            <div class="slide-content animated fadeInUp">
              <span class="slide-subtitle text-uppercase">Developing Lifestyle</span>
              <h1 class="display-3 text-white font-weight-bold">Modern Living Redefined</h1>
              <p class="lead text-white-50">Luxury residential projects designed for the global citizen.</p>
              <div class="slide-btns mt-4">
                <a href="{{ '/projects/gajvalley-2/' | relative_url }}" class="btn btn-outline-light btn-lg px-5 mr-3">About Us <i class="fas fa-arrow-right ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> <div class="hero-slide" style="background-image: url('{{ '/images/home-page-slider/banner_6_gaj_greens.webp' | relative_url }}');">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-8">
            <div class="slide-content animated fadeInUp">
              <span class="slide-subtitle text-uppercase">Developing Lifestyle</span>
              <h2 class="display-3 text-white font-weight-bold">Modern Living Redefined</h2>
              <p class="lead text-white-50">Luxury residential projects designed for the global citizen.</p>
              <div class="slide-btns mt-4">
                <a href="{{ '/projects/gajvalley-2/' | relative_url }}" class="btn btn-outline-light btn-lg px-5 mr-3">About Us <i class="fas fa-arrow-right ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> <div class="hero-slide" style="background-image: url('{{ '/images/home-page-slider/banner_2_gaj_valley_1.webp' | relative_url }}');">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-8">
            <div class="slide-content animated fadeInUp">
              <span class="slide-subtitle text-uppercase">Developing Lifestyle</span>
              <h2 class="display-3 text-white font-weight-bold">Modern Living Redefined</h2>
              <p class="lead text-white-50">Luxury residential projects designed for the global citizen.</p>
              <div class="slide-btns mt-4">
                <a href="{{ '/projects/gajvalley-2/' | relative_url }}" class="btn btn-outline-light btn-lg px-5 mr-3">About Us <i class="fas fa-arrow-right ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> <div class="hero-slide" style="background-image: url('{{ '/images/home-page-slider/banner_1_gaj_valley_2.webp' | relative_url }}');">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-8">
            <div class="slide-content animated fadeInUp">
              <span class="slide-subtitle text-uppercase">Developing Lifestyle</span>
              <h2 class="display-3 text-white font-weight-bold">Modern Living Redefined</h2>
              <p class="lead text-white-50">Luxury residential projects designed for the global citizen.</p>
              <div class="slide-btns mt-4">
                <a href="{{ '/projects/gajvalley-2/' | relative_url }}" class="btn btn-outline-light btn-lg px-5 mr-3">About Us <i class="fas fa-arrow-right ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> <div class="hero-slide" style="background-image: url('{{ '/images/home-page-slider/banner_12_gaj_valley_flora.webp' | relative_url }}');">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-8">
            <div class="slide-content animated fadeInUp">
              <span class="slide-subtitle text-uppercase">Developing Lifestyle</span>
              <h2 class="display-3 text-white font-weight-bold">Modern Living Redefined</h2>
              <p class="lead text-white-50">Luxury residential projects designed for the global citizen.</p>
              <div class="slide-btns mt-4">
                <a href="{{ '/projects/gajvalley-2/' | relative_url }}" class="btn btn-outline-light btn-lg px-5 mr-3">About Us <i class="fas fa-arrow-right ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> </div> <div class="slider-dots">
    <span class="dot active" onclick="jumpToSlide(0)"></span>
    <span class="dot" onclick="jumpToSlide(1)"></span>
    <span class="dot" onclick="jumpToSlide(2)"></span>
    <span class="dot" onclick="jumpToSlide(3)"></span>
    <span class="dot" onclick="jumpToSlide(4)"></span>
  </div>
</section> -->

<section class="hero-slider-wrapper">
  <div class="hero-slider">
    {% for slide in site.data.slider %}
    <div class="hero-slide {% if forloop.first %}active{% endif %}" 
         style="background-image: url('{{ slide.image | relative_url }}');">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-8">
            <div class="slide-content animated fadeInUp">
              <span class="slide-subtitle text-uppercase">{{ slide.subtitle }}</span>
              
              {% if forloop.first %}
                <h1 class="display-3 text-white font-weight-bold">{{ slide.title }}</h1>
              {% else %}
                <h2 class="display-3 text-white font-weight-bold">{{ slide.title }}</h2>
              {% endif %}
              
              <p class="lead text-white-50">{{ slide.description }}</p>
              
              <div class="slide-btns mt-4">
                <a href="{{ slide.link | relative_url }}" class="btn btn-outline-light btn-lg px-5 mr-3">
                  {{ slide.button_text }} <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="slider-dots">
    {% for slide in site.data.slider %}
    <span class="dot {% if forloop.first %}active{% endif %}" 
          onclick="jumpToSlide({{ forloop.index0 }})"></span>
    {% endfor %}
  </div>
</section>

<style>
.header{
  position: fixed !important;
  background: transparent !important;
}
.main-menu>ul>li>a{
  color: white !important;
}
  .hero-slider-wrapper {
  position: relative;
  width: 100vw;
  height: 85vh; /* Large impact height */
  margin-left: calc(-50vw + 50%); /* Breakout of container */
  overflow: hidden;
}

.slide-btns {
    width: 200px;
    border: 1px solid yellow;
    padding: 10px;
    color: black !important;
}
a.btn.btn-outline-light.btn-lg.px-5.mr-3 {
    color: white;
    font-size: 20px;
    font-weight: bold;
}
a.btn.btn-outline-light.btn-lg.px-5.mr-3:hover {
    text-decoration: none;
}

.hero-slide {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out, transform 1.2s ease;
  transform: scale(1.05); /* Subtle zoom-out effect */
}

.hero-slide.active {
  opacity: 1;
  z-index: 1;
  transform: scale(1);
}

.slide-subtitle {
  color: rgba(255,255,255,0.8);
  letter-spacing: 4px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
}

/* Floating Dots Overlay (Grandiose Style) */
.slider-dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 15px;

  .dot {
    width: 12px; height: 12px;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    
    &.active {
      background: #fff;
      transform: scale(1.2);
    }
  }
}
</style>
<script>
  let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.slider-dots .dot');

function showHeroSlide(index) {
  heroSlides.forEach(s => s.classList.remove('active'));
  heroDots.forEach(d => d.classList.remove('active'));
  
  heroSlides[index].classList.add('active');
  heroDots[index].classList.add('active');
  currentHeroIndex = index;
}

function autoSlide() {
  let next = (currentHeroIndex + 1) % heroSlides.length;
  showHeroSlide(next);
}

// Initialize
setInterval(autoSlide, 6000);

function jumpToSlide(idx) {
  showHeroSlide(idx);
}

</script>
