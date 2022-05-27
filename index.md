---
permalink: /index99.html
layout: null
---

<html lang="en" prefix="og: http://ogp.me/ns#">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CLEAN MARKUP = GOOD KARMA.
      Hi source code lover,

      you're a curious person and a fast learner ;)
      Let's make something beautiful together. Contribute on Github:
      https://github.com/webslides/webslides

      Thanks!
    -->

    <!-- SEO -->
    <title>WebSlides Keynote: Make a Keynote presentation using HTML</title>
    <meta name="description" content="WebSlides is the easiest way to make HTML presentations. Just essential features, clean code, and lovely CSS.">

    <!-- URL CANONICAL -->
    <!-- <link rel="canonical" href="http://your-url.com/permalink"> -->

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,700,700i%7CMaitree:200,300,400,600,700&amp;subset=latin-ext" rel="stylesheet">

    <!-- CSS Base -->
    <link rel="stylesheet" type='text/css' media='all' href="/static/css/webslides.css">

    <!-- Optional - CSS SVG Icons (Font Awesome) -->
    <link rel="stylesheet" type="text/css" media="all" href="/static/css/svg-icons.css">

    <!-- SOCIAL CARDS (ADD YOUR INFO) -->

    <!-- FACEBOOK -->
    <meta property="og:url" content="http://your-url.com/permalink"> <!-- EDIT -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="Make a Keynote presentation using HTML"> <!-- EDIT -->
    <meta property="og:description" content="WebSlides is the easiest way to make HTML presentations. 120+ free slides ready to use."> <!-- EDIT -->
    <meta property="og:updated_time" content="2017-01-04T17:32:14"> <!-- EDIT -->
    <meta property="og:image" content="/static/images/share-webslides.jpg" > <!-- EDIT -->

    <!-- TWITTER -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@webslides"> <!-- EDIT -->
    <meta name="twitter:creator" content="@jlantunez"> <!-- EDIT -->
    <meta name="twitter:title" content="Make a Keynote presentation using HTML"> <!-- EDIT -->
    <meta name="twitter:description" content="WebSlides is the easiest way to make HTML presentations. 120+ free slides ready to use."> <!-- EDIT -->
    <meta name="twitter:image" content="/static/images/share-webslides.jpg"> <!-- EDIT -->

    <!-- FAVICONS -->
    <link rel="shortcut icon" sizes="16x16" href="/static/images/favicons/favicon.png">
    <link rel="shortcut icon" sizes="32x32" href="/static/images/favicons/favicon-32.png">
    <link rel="apple-touch-icon icon" sizes="76x76" href="/static/images/favicons/favicon-76.png">
    <link rel="apple-touch-icon icon" sizes="120x120" href="/static/images/favicons/favicon-120.png">
    <link rel="apple-touch-icon icon" sizes="152x152" href="/static/images/favicons/favicon-152.png">
    <link rel="apple-touch-icon icon" sizes="180x180" href="/static/images/favicons/favicon-180.png">
    <link rel="apple-touch-icon icon" sizes="192x192" href="/static/images/favicons/favicon-192.png">

    <!-- Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#333333">
  </head>
  <body>
    

    <main role="main">
      <article id="webslides">

        <!-- Quick Guide
          - Each parent <section> in the <article id="webslides"> element is an individual slide.
          - Vertical sliding = <article id="webslides" class="vertical">
          - <div class="wrap"> = container 90% / <div class="wrap size-50"> = 45%;
        -->
        <section>
          <span class="background" style="background-image:url('/static/images/nature.png')"></span>
           <!--.wrap = container (width: 90%) -->
           <div class="wrap aligncenter">
             <h1><strong>In-context Hoodie</strong></h1>
             <p class="text-intro">Wearable tech<br>
               And App for your Wellbeing.
             </p>
             <p>
               <a href="https://webslides.tv/webslides-latest.zip" class="button zoomIn" title="Download WebSlides for free">
                 <svg class="fa-cloud-download">
                   <use xlink:href="#fa-cloud-download"></use>
                 </svg>
                 White Papers
               </a>
             </p>
           </div>
           <!-- .end .wrap -->
         </section>
         <section>
           <!--.wrap = container (width: 90%) -->
           <div class="wrap size-50 aligncenter">
             <h2><strong>What is In-context?</strong></h2>
           
              <div class="bg-white shadow">
               <ul class="flexblock reasons">
                 <li>
                   <h2>Wearable Tech</h2>
                   <p>The In-context hoodie allows the user to record, stream audio and video to an encrupted server also with the ablity to monitor an medical conditions.</p>
                 </li>
                 <li>
                   <h2>In-context App</h2>
                   <p>Designers, marketers, and journalists can now focus on the content. Simply <a href="demos/index.html" title="WebSlides Demos">choose a demo</a> and customize it in minutes.</p>
                 </li>
                  <li>
                   <h2>Work better, faster.</h2>
                   <p>Designers, marketers, and journalists can now focus on the content. Simply <a href="demos/index.html" title="WebSlides Demos">choose a demo</a> and customize it in minutes.</p>
                 </li>
               </ul>
             </div>
             <!-- .end .bg-white shadow -->
           </div>
           <!-- .end .wrap -->
         </section>
         <section>
           <!--.wrap = container (width: 90%) -->
           <div class="wrap">
             <div class="grid vertical-align">
               <div class="column">
                 <h3><strong>WebSlides is really easy</strong></h3>
                 <p class="text-intro">Each parent <code>&lt;section&gt;</code> in the #webslides element is an individual slide. </p>
                 <p>Code is clean and scalable. It uses <strong>intuitive markup</strong> with popular naming conventions. There's no need to overuse classes or nesting. <strong>Making an HTML presentation has never been so fast</strong>.</p>
               </div>
               <!-- .end .column -->
               <div class="column">
                 <pre>&lt;article id="webslides"&gt;
   <span class="code-comment">&lt;!-- Slide 1 --&gt;</span>
   &lt;section&gt;
     &lt;h1&gt;Design for trust&lt;/h1&gt;
   &lt;/section&gt;
   <span class="code-comment">&lt;!-- Slide 2 --&gt;</span>
   &lt;section class="bg-primary"&gt;
     &lt;div class="wrap"&gt;
       &lt;h2&gt;.wrap = container (width: 90%)&lt;/h2&gt;
     &lt;/div&gt;
   &lt;/section&gt;
 &lt;/article&gt;
 </pre>
               </div>
               <!-- .end .column -->
             </div>
             <!-- .end .grid -->
           </div>
           <!-- .end .wrap -->
         </section>
         <section>
           <div class="wrap">
             <h2>Features</h2>
             <ul class="flexblock features">
               <li>
                 <div>
                   <h2>
                     <span>&rarr;</span>
                     Simple Navigation
                   </h2>
                   with arrow keys, presenter...
                 </div>
               </li>
               <li>
                 <div>
                   <h2>
                     <svg class="fa-link">
                       <use xlink:href="#fa-link"></use>
                     </svg>
                     Permalinks
                   </h2>
                   Go to a specific slide.
                 </div>
               </li>
               <li>
                 <div>
                   <h2>
                     <svg class="fa-clock-o">
                       <use xlink:href="#fa-clock-o"></use>
                     </svg>
                     Slide Counter
                   </h2>
                   Current/Total number.
                 </div>
               </li>
               <li>
                 <div>
                   <h2>
                     <span>40<sup>+</sup></span>
                     Beautiful Components
                   </h2>
                   Covers, cards, quotes...
                 </div>
               </li>
               <li>
                 <div>
                   <h2>
                     <svg class="fa-text-height">
                       <use xlink:href="#fa-text-height"></use>
                     </svg>
                     Vertical Rhythm
                   </h2>
                   Use multiples of 8.
                 </div>
               </li>
               <li>
                 <div>
                   <h2>
                     <span>500<sup>+</sup></span>
                     SVG Icons
                   </h2>
                   Font Awesome Kit.
                 </div>
               </li>
             </ul>
           </div>
         </section>
         <section>
           <div class="wrap">
             <h2><strong>WebSlides Demos</strong></h2>
             <p>Contribute on <a href="https://github.com/webslides/webslides" title="Contribute on Github">Github</a>. <span class="alignright"><a href="demos/index.html" title="WebSlides Demos">View all &rsaquo;</a></span></p>
             <ul class="flexblock gallery">
               <li>
                 <a href="demos/why-webslides.html" title="Why WebSlides?">
                   <figure>
                     <img alt="Thumbnail Why WebSlides?" src="https://webslides.tv/static/images/demos-why.png">
                     <figcaption>
                       <h2>Why WebSlides?</h2>
                     </figcaption>
                   </figure>
                 </a>
               </li>
               <li>
                 <a href="demos/landings.html" title="Landings">
                   <figure>
                     <img alt="Thumbnail Landings" src="https://webslides.tv/static/images/demos-landings.png">
                     <figcaption>
                       <h2>Landings</h2>
                     </figcaption>
                   </figure>
                 </a>
               </li>
               <li>
                 <a href="demos/portfolios.html" title="Portfolios">
                   <figure>
                     <img alt="Thumbnail Portfolios" src="https://webslides.tv/static/images/demos-portfolios.png">
                     <figcaption>
                       <h2>Portfolios</h2>
                     </figcaption>
                   </figure>
                 </a>
               </li>
               <li>
                 <a href="demos/keynote.html" title="Apple Keynote">
                   <figure>
                     <img alt="Thumbnail Apple Keynote" src="https://webslides.tv/static/images/demos-apple.png">
                     <figcaption>
                       <h2>Apple Keynote</h2>
                     </figcaption>
                   </figure>
                 </a>
               </li>
             </ul>
           </div>
           <!-- .end .wrap -->
         </section>
         <section>
           <div class="wrap">
             <div class="grid vertical-align">
               <div class="column">
                 <h4>
                   <svg class="fa-life-ring">
                     <use xlink:href="#fa-life-ring"></use>
                   </svg>
                   <strong>Guides</strong>
                 </h4>
                 <p>If you need help, here's just three tutorials. Just a basic knowledge of HTML is required:</p>
                 <ul class="description">
                   <li><a href="demos/components.html" title="WebSlides Components">WebSlides Components</a>.</li>
                   <li><a href="demos/classes.html" title="WebSlides Classes">WebSlides Classes</a>.</li>
                   <li><a href="demos/media.html" title="WebSlides Media">WebSlides Media: images, videos...</a></li>
                 </ul>
               </div>
               <div class="column">
                 <figure><img class="aligncenter" src="static/images/setup.png" alt="WebSlides Files"></figure>
               </div>
               <div class="column">
                 <h4>
                   <svg class="fa-cubes">
                     <use xlink:href="#fa-cubes"></use>
                   </svg>
                   <strong>Built to expand</strong>
                 </h4>
                 <p>The best way to <strong>inspire with your content</strong> is to connect on a personal level:</p>
                 <ul class="description">
                   <li>Background images: <a href="http://unsplash.com">Unsplash</a>.</li>
                   <li>CSS animations: <a href="https://daneden.github.io/animate.css/">Animate.css</a>.</li>
                   <li>Longforms: <a href="http://michalsnik.github.io/aos/"> Animate on scroll</a>.</li>
                 </ul>
               </div>
             </div>
             <!--end .grid -->
           </div>
         </section>
         <section class="aligncenter">
           <!-- .wrap = container (width: 90%) -->
           <div class="wrap">
             <h2><strong>Ready to Start?</strong> </h2>
             <p class="text-intro">Create your own presentation instantly. <br>120+ premium slides ready to use.</p>
             <p>
               <a href="https://webslides.tv/webslides-latest.zip" class="button" title="Download WebSlides">
                 <svg class="fa-cloud-download">
                   <use xlink:href="#fa-cloud-download"></use>
                 </svg>
                 Free Download
               </a>
               <span class="try">
                 <a href="https://www.paypal.me/jlantunez/8" title="Thanks :)">
                   <svg class="fa-paypal">
                     <use xlink:href="#fa-paypal"></use>
                   </svg>
                   Pay what you want.
                 </a>
               </span>
             </p>
           </div>
           <!-- .end .wrap -->
         </section>
         <section class="slide-bottom">
           <div class="wrap">
             <div class="content-right text-serif">
               <h2>
                 <strong>Thanks.</strong>
                 <a target="_blank" title="Share on Twitter" href="https://twitter.com/intent/tweet?text=Finally,%20everything%20you%20need%20to%20make%20HTML%20presentations%20in%20a%20fast/beautiful%20way.%20@WebSlides%20=%20Good%20karma%20&mdash;%20https://webslides.tv">
                   <svg class="fa-twitter">
                     <use xlink:href="#fa-twitter"></use>
                   </svg>
                 </a>
               </h2>
               <p>People share content that makes them feel inspired. WebSlides is a very effective way to engage young audiences, customers, and teams.</p> 
               <p>Best,<br> <a href="https://twitter.com/jlantunez">@jlantunez</a>, <a href="https://twitter.com/belelros">@belelros</a>, and <a href="https://twitter.com/luissacristan">@luissacristan</a>.</p>
             </div>
             <!-- .end .content-right -->
           </div>
           <!-- .end .wrap -->
         </section>
        <section class="bg-apple aligncenter">
          <!--.wrap = container (width: 90%) -->
          <div class="wrap">
            <h1><img class="whitelogo" src="/static/images/logos/apple.svg" alt="Apple Logo"></h1>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <!--.wrap = container (width: 90%) -->
          <div class="wrap size-50">
            <h1>Make a Keynote presentation using HTML</h1>
            <p class="text-intro">WebSlides is an open source framework for building HTML presentations, landings, and portfolios.</p>
            <p><code>.bg-apple</code></p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple aligncenter">
          <!--.wrap = container (width: 90%) -->
          <div class="wrap">
            <h2>HTML presentations can be easy</h2>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <div class="wrap">
            <h2>Features</h2>
            <ul class="flexblock features">
              <li>
                <div>
                  <h2>
                    <span>&rarr;</span>
                    Simple Navigation
                  </h2>
                  with arrow keys and swipe.
                </div>
              </li>
              <li>
                <div>
                  <h2>
                    <svg class="fa-link">
                      <use xlink:href="#fa-link"></use>
                    </svg>
                    Permalinks
                  </h2>
                  Go to a specific slide.
                </div>
              </li>
              <li>
                <div>
                  <h2>
                    <svg class="fa-clock-o">
                      <use xlink:href="#fa-clock-o"></use>
                    </svg>
                    Slide Counter
                  </h2>
                  Current/Total number
                </div>
              </li>
              <li>
                <div>
                  <h2>
                    <span>40<sup>+</sup></span>
                    Beautiful Components
                  </h2>
                  Covers, cards, quotes...
                </div>
              </li>
              <li>
                <div>
                  <h2>
                    <svg class="fa-text-height">
                      <use xlink:href="#fa-text-height"></use>
                    </svg>
                    Vertical Rhythm
                  </h2>
                  Use multiples of 8.
                </div>
              </li>
              <li>
                <div>
                  <h2>
                    <span>500<sup>+</sup></span>
                    SVG Icons
                  </h2>
                  Font Awesome Kit.
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="bg-apple">
          <div class="wrap">
            <div class="content-left">
              <h2>WebSlides was made to inspire people.</h2>
            </div>
            <!-- end .content-left -->
            <div class="content-left">
              <p>WebSlides is a wonderful way to showcase your company. All content is for demo purposes only. Images are property of their respective owners.</p>
            </div>
            <!-- end .content-left -->
            <ul class="flexblock">
              <li>
                <div>
                  <img class="whitelogo" src="/static/images/logos/google.svg" alt="Google">
                </div>
              </li>
              <li>
                <div>
                  <img class="whitelogo" src="/static/images/logos/netflix.svg" alt="Netflix">
                </div>
              </li>
              <li>
                <div>
                  <img class="whitelogo" src="/static/images/logos/microsoft.svg" alt="Microsoft">
                </div>
              </li>
            </ul>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <div class="wrap">
            <div class="content-left">
              <h2>WebSlides help you build a culture of excellence.</h2>
            </div>
            <!-- end .content-left -->
            <div class="content-left">
              <p>The art of storytelling. Hypertext, clean code, and beauty as narrative elements. Just essential features and lovely CSS. All content is for demo purposes only. </p>
            </div>
            <!-- end .content-left -->
            <ul class="flexblock metrics">
              <li> Founded
                <span>1976</span>
              </li>
              <li>
                <span>
                  <svg class="fa-users">
                    <use xlink:href="#fa-users"></use>
                  </svg>
                </span>
                524M Subscribers
              </li>
              <li>
                <span>
                  <svg class="fa-line-chart">
                    <use xlink:href="#fa-line-chart"></use>
                  </svg>
                </span>
                Revenue: $16M
              </li>
              <li>
                Monthly Growth
                <span>64%</span>
              </li>
            </ul>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <!--.wrap o <nav> = container 1200px -->
          <div class="wrap">
            <ul class="flexblock metrics border">
              <li> Founded
                <span>1976</span>
              </li>
              <li>
                <span>
                  <svg class="fa-users">
                    <use xlink:href="#fa-users"></use>
                  </svg>
                </span>
                524M Subscribers
              </li>
              <li>
                <span>
                  <svg class="fa-line-chart">
                    <use xlink:href="#fa-line-chart"></use>
                  </svg>
                </span>
                Revenue: $16M
              </li>
              <li>
                Monthly Growth
                <span>64%</span>
              </li>
              <li>
                <span>
                  <svg class="fa-building-o">
                    <use xlink:href="#fa-building-o"></use>
                  </svg>
                </span>
                6 Offices
              </li>
              <li>
                <span>
                  <svg class="fa-smile-o">
                    <use xlink:href="#fa-smile-o"></use>
                  </svg>
                </span>
                14K Employees
              </li>
              <li>
                <span>
                $4M
                </span>
                EBITDA
              </li>
              <li>
                <span>
                  <svg class="fa-university">
                    <use xlink:href="#fa-university"></use>
                  </svg>
                </span>
                Bank: $76B
              </li>
            </ul>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple aligncenter">
          <span class="background dark" style="background-image:url('https://source.unsplash.com/pb_lF8VWaPU/')"></span>
          <div class="wrap">
            <h2 class="text-data">3,456,789</h2>
            <h3>iPhone 7 in first 24 hours</h3>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple aligncenter">
          <!--.wrap = container (width: 90%) -->
          <div class="wrap">
            <h2 class="text-data">$48 Billion</h2>
            <h3>Revenue in Q4 2024</h3>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple slide-bottom">
          <!-- Overlay/Opacity: [class*="bg-"] > .background.dark or .light -->
          <span class="background" style="background-image:url('https://source.unsplash.com/Y5Tjb62cxl8/')"></span>
          <div class="wrap">
            <div class="content-left">
              <p>
                <svg class="large fa-tree">
                  <use xlink:href="#fa-tree"></use>
                </svg>
              </p>
              <h2>1,000,000</h2>
              <h3>We're working to protect up to a million acres of sustainable forest.</h3>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <div class="wrap">
            <div class="card-50">
              <figure><img class="aligncenter" src="/static/images/iphone.png" alt="iPhone"></figure>
              <div class="flex-content">
                <h2>
                  <svg class="fa-apple">
                    <use xlink:href="#fa-apple"></use>
                  </svg>
                  iPhone 7
                </h2>
                <p class="text-intro">3D Touch, 12MP photos, and 4K video.</p>
                <p>Every iPhone they have made was built on the same belief. That a phone should be more than a collection of features. That, above all, a phone should be absolutely simple, beautiful, and magical to use.</p>
              </div>
              <!-- end .flex-content-->
            </div>
            <!-- end .card-50-->
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <div class="wrap">
            <div class="grid vertical-align">
              <div class="column">
                <h2>
                  <svg class="fa-apple">
                    <use xlink:href="#fa-apple"></use>
                  </svg>
                  iPhone 7
                </h2>
                <p class="text-intro">We worked closely with the very talented people at Acme and created a new website. Content demo. </p>
                <ul class="description">
                  <li>
                    <span class="text-label">
                    Client:
                    </span>
                    Apple (2016)
                  </li>
                  <li>
                    <span class="text-label">
                    Services:
                    </span>
                    Web Design
                  </li>
                  <li>
                    <span class="text-label">
                    Website:
                    </span>
                    <a href="https://apple.com/iphone/">apple.com/iphone</a>
                  </li>
                </ul>
              </div>
              <!-- end .column-->
              <div class="column">
                <figure>
                  <img src="/static/images/iphone.png" alt="iPhone">
                </figure>
              </div>
              <!-- end figure-->
            </div>
            <!-- end .grid-->
          </div>
          <!-- end .wrap-->
        </section>
        <section class="bg-apple">
          <div class="wrap">
            <div class="card-50">
              <div class="flex-content">
                <ul class="flexblock specs">
                  <li>
                    <div>
                      <svg class="fa-wifi">
                        <use xlink:href="#fa-wifi"></use>
                      </svg>
                      <h2>Ultra-Fast WiFi</h2>
                      Faster LTE with the best worldwide roaming.
                    </div>
                  </li>
                  <li>
                    <div>
                      <svg class="fa-camera">
                        <use xlink:href="#fa-camera"></use>
                      </svg>
                      <h2>Two cameras that shoot as one.</h2>
                      12MP wide angle.
                    </div>
                  </li>
                  <li>
                    <div>
                      <svg class="fa-life-ring">
                        <use xlink:href="#fa-life-ring"></use>
                      </svg>
                      <h2>Lifetime Warranty </h2>
                      We'll fix it or if we can't, we'll replace it.
                    </div>
                  </li>
                </ul>
              </div>
              <!-- end .flex-content-->
              <figure>
                <img class="aligncenter" src="/static/images/iphone.png" alt="iPhone 6">
              </figure>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple aligncenter">
          <div class="wrap zoomIn">
            <h1>
              <svg class="fa-apple">
                <use xlink:href="#fa-apple"></use>
              </svg>
              Pay
            </h1>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <span class="background-left-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span>
          <div class="wrap">
            <div class="content-right">
              <h2>
                Redesigning
                <svg class="fa-apple">
                  <use xlink:href="#fa-apple"></use>
                </svg>
                Pay
              </h2>
              <p>We've been working with the Acme team over the last three months to build a new app.</p>
              <p>
                <a href="#" class="button" title="Case study">Case study &rsaquo;</a>
                <a href="https://www.apple.com/apple-pay/" class="button ghost" title="Apple Website">Open site &rsaquo;</a>
              </p>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <span class="background-right-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap">
            <div class="content-left">
              <h2>Payments Made Simple</h2>
              <p>Apple Pay is so easy. Pay with your debit cards and credit cards with just a touch.</p>
              <div class="content-left">
                <h3>Secure</h3>
                <p>Your card is never stored. Apple Pay uses a device-specific number and unique transaction code.</p>
              </div>
              <!-- .end .content-left -->
              <div class="content-left">
                <h3>Universal</h3>
                <p>Apple Pay works with most major credit and debit cards from nearly all banks.</p>
              </div>
              <!-- .end .content-left -->
            </div>
            <!-- .end .content-left -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <span class="background-left-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span>
          <div class="wrap">
            <div class="content-right">
              <ul class="flexblock specs">
                <li>
                  <div>
                    <svg class="fa-bolt">
                      <use xlink:href="#fa-bolt"></use>
                    </svg>
                    <h2>Incredibly fast</h2>
                    Just hold your iPhone near the reader.
                  </div>
                </li>
                <li>
                  <div>
                    <svg class="fa-globe">
                      <use xlink:href="#fa-globe"></use>
                    </svg>
                    <h2>Works with all major banks</h2>
                    Apple Pay is accepted in restaurants, hotels...
                  </div>
                </li>
                <li>
                  <div>
                    <svg class="fa-lock">
                      <use xlink:href="#fa-lock"></use>
                    </svg>
                    <h2>The safer way to pay</h2>
                    Your card number is never stored.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <span class="background-right-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span>
          <div class="wrap">
            <div class="content-left">
              <h1>
                <svg class="fa-apple">
                  <use xlink:href="#fa-apple"></use>
                </svg>
                Pay
              </h1>
              <p>Use your iPhone to pay securely and easily at over a million store locations and within apps — with a single touch. See where you can use Apple Pay:
              </p>
              <form class="user" action="/" method="post">
                <input type="text" name="location" placeholder="Stores in your city..." required>
                <button type="submit" title="Search">Search &rsaquo;</button>
              </form>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <!--.wrap = container (width: 90%) -->
          <div class="wrap">
            <blockquote class="text-quote">
              <p>I'm an optimist in the sense that I believe humans are noble and honorable, and some of them are really smart. I have a very optimistic view of individuals.</p>
              <p>
                <cite>
                  <!-- <img class="avatar-56" src="/static/images/avatar.jpg" alt="Avatar"> --> Steve Jobs.
                </cite>
              </p>
            </blockquote>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <span class="background-right-bottom" style="background-image:url('https://webslides.tv/static/images/tim-cook.png')"></span>
          <div class="wrap">
            <div class="content-left">
              <blockquote>
                <p>&ldquo;We see that privacy is a fundamental human right that people have. We are going to do everything that we can to help maintain that trust.&rdquo;</p>
                <p><cite>Tim Cook, CEO of Apple.</cite></p>
              </blockquote>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <header>
            <!--.wrap o <nav> = container 1200px -->
            <div class="wrap">
              <p>Header <span class="alignright">.alignright</span></p>
            </div>
          </header>
          <div class="aligncenter fadeInUp">
            <h2>Simple CSS Alignments</h2>
            <p>Put content wherever you want.</p>
          </div>
          <footer class="bg-trans-dark">
            <div class="wrap">
              <p>
                <span class="alignleft">
                Footer
                </span>
                <span class="alignright">
                  <a href="#" title="Twitter">
                    <svg class="fa-twitter">
                      <use xlink:href="#fa-twitter"></use>
                    </svg>
                    @username
                  </a>
                </span>
              </p>
            </div>
          </footer>
        </section>
        <section class="bg-apple slide-top">
          <div class="wrap">
            <div class="content-left">
              <h3>1/9 left top</h3>
              <p>Put content wherever you want. Have less. Do more. Create beautiful solutions.</p>
              <p><code>.slide-top and .content-left</code></p>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple slide-top">
          <div class="wrap">
            <div class="content-center">
              <h3>2/9 center top</h3>
              <p>Apple I was designed and hand-built by Steve Wozniak. Steve Jobs had the idea of selling the computer.</p>
              <p><code>.slide-top and .content-center</code></p>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple slide-top">
          <div class="wrap">
            <div class="content-right">
              <h3>3/9 right top</h3>
              <p>The Apple II is one of the first highly successful computers.</p>
              <p><code>.slide-top and .content-right</code></p>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <div class="wrap">
            <div class="content-left">
              <h3>4/9 left center</h3>
              <p>The Apple III is a business-oriented personal computer that was intended as the successor to the Apple II series.</p>
              <p><code>.content-left</code></p>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <div class="wrap">
            <div class="content-center">
              <h3>5/9 center</h3>
              <p>Apple Lisa was one of the first personal computers to offer a graphical user interface.</p>
              <p><code>.content-center</code></p>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <div class="wrap">
            <div class="content-right">
              <h3>6/9 right center</h3>
              <p>The Macintosh was the company's first mass-market personal computer featuring a GUI and mouse.</p>
              <p><code>.content-right</code></p>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple slide-bottom">
          <div class="wrap">
            <div class="content-left">
              <h3>7/9 left bottom</h3>
              <p>The iBook was a line of laptop computers designed and marketed by Apple Inc. from 1999 to 2006.</p>
              <p><code>.slide-bottom</code> and <code>.content-left</code></p>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple slide-bottom">
          <div class="wrap">
            <div class="content-center">
              <h3>8/9 center bottom</h3>
              <p>Apple introduced the first generation iPod on October 23, 2001, with the slogan "1,000 songs in your pocket".</p>
              <p><code>.slide-bottom</code> and <code>.content-center</code></p>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple slide-bottom">
          <div class="wrap">
            <div class="content-right">
              <h3>9/9 right bottom</h3>
              <p>The original iPhone was introduced by Steve Jobs on January 9, 2007. Jobs introduced the iPhone as a combination of three devices.</p>
              <p><code>.slide-bottom</code> and <code>.content-right</code></p>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <div class="wrap size-50">
            <h2>CSS Animations</h2>
            <p>Fadein transition to all slides.</p>
            <pre>&lt;article id="webslides"&gt;
  &lt;section&gt;
    &lt;div class="wrap fadeInUp"&gt;
      &lt;h1&gt;Slide&lt;/h1&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/article&gt;</pre>
            <p>Just 5 basic animations: .fadeIn, .fadeInUp, .zoomIn, .slideInLeft, and .slideInRight.</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-black aligncenter">
          <span class="background light" style="background-image:url('https://source.unsplash.com/UxtIESWxLh8/')"></span>
          <div class="wrap">
            <h2>Embedding Media</h2>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple">
          <div class="wrap">
            <div class="content-left">
              <h3><a href="https://webslides.tv/demos/media#slide=2">YouTube API</a></h3>
              <p>Embed videos with loop, autoplay, and muted attributes. The video will automatically play when the slide is loaded.</p>
              <pre>&lt;div class="embed"&gt;
 &lt;div data-youtube data-youtube-id=&quot;CQY3KUR3VzM&quot; data-autoplay &gt;&lt;/div&gt;
&lt;/div&gt;</pre>
              <p><code>.embed</code> (responsive)</p>
            </div>
            <!-- end .content-left -->
            <div class="content-left">
              <!-- <div class="embed"> = Responsive -->
              <div class="embed">
                <div data-youtube data-youtube-id="CQY3KUR3VzM" data-autoplay data-no-controls></div>
              </div>
              <!-- end .embed -->
            </div>
            <!-- end .content-left -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple fullscreen">
          <!-- Fullscreen Video -->
          <div class="embed">
            <div data-youtube data-youtube-id="lvOKBQvbLhg" data-autoplay></div>
          </div>
          <!-- .end .embed -->
        </section>
        <section class="fullscreen bg-apple aligncenter">
         <div class="embed">
           <video autoplay loop muted poster="https://webslides.tv/static/images/peggy.jpg">
            <source src="https://webslides.tv/static/videos/peggy.mp4" type="video/mp4">
           </video>
          </div><!-- .embed -->
          <!-- .wrap = container (width: 90%) -->
          <div class="wrap size-50">
            <h2><strong>Be Awesome</strong></h2>
          </div>
        </section>
        <section class="fullscreen bg-black aligncenter">
          <div class="embed dark">
             <video autoplay loop muted poster="https://webslides.tv/static/images/peggy.jpg">
             <source src="https://webslides.tv/static/videos/peggy.mp4" type="video/mp4">
            </video>
          </div><!-- .embed -->
          <!-- .wrap = container (width: 90%) -->
          <div class="wrap size-50">
            <h2><strong>Think Different</strong></h2>
            <p>Overlay: <code>fullscreen.bg-black > .embed.dark</code> or .light</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple aligncenter">
          <span class="background-right-bottom" style="background-image:url('https://webslides.tv/static/images/tim-cook.png')"></span>
          <div class="wrap">
            <h1>One more thing...</h1>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple aligncenter">
          <div class="wrap">
            <div class="cta">
              <div class="number">
                <p><span>Ag</span></p>
              </div>
              <!--end .number -->
              <div class="benefit">
                <p class="text-subtitle">San Francisco</p>
                <h3><strong>The quick brown fox jumps over the lazy dog</strong>.</h3>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>1234567890(,.;:?!$&*)</p>
              </div>
              <!--end .benefit -->
            </div>
            <!--end .cta -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple aligncenter">
          <!-- .wrap = container (width: 90%) -->
          <div class="wrap">
            <h2><strong>Start in seconds</strong></h2>
            <p class="text-intro">120+ prebuilt slides ready to use.</p>
            <p>
              <a href="https://webslides.tv/webslides-latest.zip" class="button" title="Download WebSlides">
                <svg class="fa-cloud-download">
                  <use xlink:href="#fa-cloud-download"></use>
                </svg>
                Free Download
              </a>
              <span class="try">
                <a href="https://www.paypal.me/jlantunez/8" title="Good karma :)">
                  <svg class="fa-paypal">
                    <use xlink:href="#fa-paypal"></use>
                  </svg>
                  Pay what you want.
                </a>
              </span>
            </p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-apple aligncenter">
          <h2 class="text-emoji zoomIn">😎</h2>
          <h3><strong>Thank you!</strong></h2>
          <p><a href="https://twitter.com/webslides" title="@WebSlides on Twitter">@WebSlides</a></p>
        </section>
        <section class="bg-red">
          <span class="background dark" style="background-image:url('https://source.unsplash.com/R1J6Z1cnJZc/1600x800')"></span>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap aligncenter">
            <h1>
              <strong>Netflix's Culture</strong>
            </h1>
            <p class="text-symbols">* * * </p>
            <p><a class="button ghost" href="https://webslides.tv/webslides-latest.zip" title="Download WebSlides for free">
              <svg class="fa-cloud-download">
                <use xlink:href="#fa-cloud-download"></use>
              </svg> WebSlides</a>
            </p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap size-50 bg-white">
            <h2>
              <svg class="fa-info-circle large">
                <use xlink:href="#fa-info-circle"></use>
              </svg>
              <strong>A bit of context</strong>
            </h2>
            <hr>
            <p><a href="http://firstround.com/review/The-woman-behind-the-Netflix-Culture-doc/">Patty McCord</a> created <a href="https://jobs.netflix.com/life-at-netflix">Netflix's culture</a>. She wrote the document called <strong>"Netflix Culture: Freedom & Responsibility."</strong> (2009). So far, it's been shared over 16 million times on <a href="https://www.slideshare.net/reed2001/culture-1798664">Slideshare</a> and has been called "the most important document ever to come out of the Valley" by Sheryl Sandberg.</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap">
            <div class="grid vertical-align">
              <div class="column">
                <h3><strong>We seek excellence</strong></h3>
              </div>
              <div class="column">
                <p class="text-intro">We value candor, transparency, and courage. <strong>We embrace context and avoid control</strong>, seeking insight and understanding to make sound decisions.
                </p>
              </div>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-red">
          <span class="background" style="background-image:url('https://source.unsplash.com/BYYu5nvQoUM/1600x800')"></span>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap aligncenter fadeInUp">
            <h3><strong>Diversity & Inclusiveness</strong></h3>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap size-50">
            <h2><strong>7 Aspects</strong> of our Culture</h2>
            <hr>
            <ol class="text-cols">
              <li><strong>Values are what we Value</strong></li>
              <li>High Performance</li>
              <li>Freedom & Responsibility</li>
              <li>Context, not Control</li>
              <li>Highly Alined, Loosely Coupled</li>
              <li>Pay Top of Market</li>
              <li>Promotions & Development</li>
            </ol>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap size-50 bg-white">
            <h3><strong>1/7 Values are what we value</strong></h3>
            <p class="text-intro">Make your values mean something.</p>
            <hr>
            <p>Many companies have nice sounding value statements displayed in the lobby. Enron, whose leaders went to jail, and which went <strong>bankrupt from <a href="https://www.youtube.com/watch?v=jrEf8uabe7E">fraud</a></strong> had these values displayed in their lobby: <strong>integrity, communication, respect, and excellence</strong>.</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap size-50">
            <h2><strong>9 Behaviors</strong></h2>
            <p class="text-intro">At Netflix, we particularly value the following nine behaviors and skills. We hire and promote people who demonstrate these nine.</p>
            <hr>
            <ol class="text-cols">
              <li>Judgment</li>
              <li>Communication</li>
              <li>Impact</li>
              <li>Curiosity</li>
              <li>Innovation</li>
              <li>Courage</li>
              <li>Passion</li>
              <li>Honesty</li>
              <li>Selflessness</li>
            </ol>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap size-50">
            <h2><strong>7 Aspects</strong> of our Culture</h2>
            <hr>
            <ol class="text-cols">
              <li><strong>Values are what we Value</strong></li>
              <li><strong>High Performance</strong></li>
              <li>Freedom & Responsibility</li>
              <li>Context, not Control</li>
              <li>Highly Alined, Loosely Coupled</li>
              <li>Pay Top of Market</li>
              <li>Promotions & Development</li>
            </ol>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-black">
          <span class="background dark" style="background-image:url('https://source.unsplash.com/8lUTnkZXZSA/1600x800')"></span>
          <div class="wrap">
            <h3><strong>2/7 High Performance</strong></h3>
            <ul class="flexblock features">
              <li>
                <div>
                  <h2>
                    <svg class="fa-users">
                      <use xlink:href="#fa-users"></use>
                    </svg>
                    We're a team
                  </h2>
                  not a family.
                </div>
              </li>
              <li>
                <div>
                  <h2>
                    <svg class="fa-trophy">
                      <use xlink:href="#fa-trophy"></use>
                    </svg>
                    We're a pro sports team
                  </h2>
                  not a kid's recreational team.
                </div>
              </li>
              <li>
                <div>
                  <h2>
                    <svg class="fa-star">
                      <use xlink:href="#fa-star"></use>
                    </svg>
                    We have stars
                  </h2>
                  in every position.
                </div>
              </li>
            </ul>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <span class="background" style="background-image:url('https://source.unsplash.com/M-H70CDJnDI/1600x800')"></span>
          <div class="wrap size-60 bg-trans-dark">
            <h4><strong>Why are we so manic on high performance?</strong></h4>
            <p class="text-intro">In procedural work, the best are 2x better than the average.</p>
            <hr>
            <p class="text-intro">In creative work, the best are 10x better than the average, so huge premium on creating effective teams of the best.</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-black">
          <span class="background" style="background-image:url('https://source.unsplash.com/26qZsuRwm0c/1600x800')"></span>
          <div class="wrap aligncenter">
            <h2><strong>Content that people love</strong></h2>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="fullscreen">
          <div class="embed">
            <video autoplay loop poster="https://webslides.tv/static/images/netflix.jpg">
              <source src="https://webslides.tv/static/videos/netflix.mp4" type="video/mp4">
            </video>
          </div>
          <!-- .end .embed -->
        </section>
        <section>
          <div class="wrap size-50">
            <h3><strong>3/7 Freedom & Responsibility</strong></h3>
            <p class="text-intro">Most companies have complex policies around what you can expense, how you travel, what gifts you can accept, etc.</p>
            <hr>
            <p class="text-intro"><strong>Netflix's Policy</strong>: "Act in Netflix's best interest" (5 words long).</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap">
            <h3><strong>"Act in Netflix's best interest"</strong> generally means...</h3>
            <ul class="flexblock border">
            <li>
              Expense only what you would otherwise not spend.
            </li>
            <li>
              Travel as you would if it were your own money.
            </li>
            <li>
              What gifts you can accept?
              Disclose non-trivial vendor gifts.
            </li>
            <li>
              Take from Netflix only when it is inefficient to not take (calls...)
            </li>
            </ul>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap size-50 bg-white">
            <h4><strong>Summary of Freedom & Responsibility</strong></h4>
            <hr>
            <ol>
              <li>As we grow, minimize rules.</li>
              <li>Inhibit chaos with ever more high performance people.</li>
              <li><strong>Flexibility is more important than efficiency</strong> in the long term.</li>
            </ol>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap">
            <div class="grid">
              <div class="column">
                <p class="text-context">
                  This is a homage.
                </p>
                <p class="text-intro"><a href="http://firstround.com/review/The-woman-behind-the-Netflix-Culture-doc/">Patty McCord</a> wrote <strong>"Netflix Culture: Freedom & Responsibility"</strong>. Go to <a href="https://www.slideshare.net/reed2001/culture-1798664">Slideshare</a> to read the whole document.</p>
              </div>
              <div class="column">
               <div>
                <div class="embed">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/uvG0aCbuG60?rel=0&amp;controls=0"  allowfullscreen></iframe>
                </div>
                <!-- normalize flexbox -->
               </div>
               <!-- end .embed -->
              </div>
              <!-- end .column -->
            </div>
            <!-- end .grid -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-black-blue aligncenter">
          <span class="background dark" style="background-image:url('https://source.unsplash.com/Zq_K89I9E-8/)"></span>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap">
            <p class="text-subtitle">WebSlides Tutorial</p>
            <h1 class="text-landing">Media</h1>
            <p class="text-symbols">* * *</p>
            <p>
              <a class="button ghost" href="https://github.com/webslides/webslides" title="Download WebSlides">
                <svg class="fa-github">
                  <use xlink:href="#fa-github"></use>
                </svg>
                Free Download
              </a>
            </p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="aligncenter">
          <div class="wrap">
            <h2><strong>A quick reference guide for beginners</strong></h2>
            <p class="text-intro">Videos, images, maps, and charts.</p>
            <ul class="flexblock border">
              <li>
                <!--div required = padding li or li>a-->
                <div>
                  <h3><a target="_blank" href="#slide=3">Images</a></h3>
                  <ol>
                    <li><a target="_blank" href="#slide=4">Background Images</a></li>
                    <li><a target="_blank" href="#slide=9">Overlays (light and dark)</a></li>
                    <li><a target="_blank" href="#slide=11">500+ SVG Icons</a></li>
                    <li><a target="_blank" href="#slide=13">Logos</a></li>
                    <li><a target="_blank" href="#slide=14">Avatars</a></li>
                    <li><a target="_blank" href="#slide=15">Devices</a></li>
                    <li><a target="_blank" href="#slide=16">Screenshots</a></li>
                  </ol>
                </div>
              </li>
              <li>
                <!--div required = padding li or li>a-->
                <div>
                  <h3><a target="_blank" href="#slide=17">Videos</a></h3>
                  <ol>
                    <li><a target="_blank" href="#slide=18">Background Videos (hosted & overlay)</a></li>
                    <li><a target="_blank" href="#slide=22">Embedding YouTube videos</a></li>
                    <li><a target="_blank" href="#slide=24">Fullscreen YouTube videos</a></li>
                    <li>
                      <a target="_blank" href="#slide=26"><strong>YouTube API:</strong></a>
                      <ol>
                        <li><a target="_blank" href="#slide=27">Autoplay, loop, mute, and no controls</a></li>
                        <li><a target="_blank" href="#slide=30">Fullscreen video</a></li>
                        <li><a target="_blank" href="#slide=32">Background video with overlay</a></li>
                      </ol>
                    </li>
                  </ol>
                </div>
              </li>
              <li>
                <!--div required = padding li or li>a-->
                <div>
                  <h3><a target="_blank" href="#slide=34">Maps & Charts</a></h3>
                  <ol>
                    <li><a target="_blank" href="#slide=35">Embedding maps</a></li>
                    <li><a target="_blank" href="#slide=36">Embedding the map in a card</a></li>
                    <li><a target="_blank" href="#slide=37">Fullscreen maps</a></li>
                    <li><a target="_blank" href="#slide=38">Embedding charts</a></li>
                  </ol>
                </div>
              </li>
            </ul>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap aligncenter">
            <h3>
              <svg class="fa-camera">
                <use xlink:href="#fa-camera"></use>
              </svg>
              Insert images wherever you want
            </h3>
            <p class="text-intro">15 different positions.</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap">
            <h3>15 Different Backgrounds</h3>
            <ul class="text-cols">
              <li><strong>.background</strong> (fullscreen)</li>
              <li>.background-top (cover)</li>
              <li>.background-bottom (cover)</li>
              <li>.background.light (opacity)</li>
              <li>.background.dark (opacity)</li>
              <li>.background-center</li>
              <li>.background-center-top</li>
              <li>.background-center-bottom</li>
              <li>.background-left</li>
              <li>.background-left-top</li>
              <li>.background-left-bottom</li>
              <li>.background-right</li>
              <li>.background-right-top</li>
              <li>.background-right-bottom</li>
              <li>.background-anim (animated)</li>
            </ul>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap size-50">
            <h4>
              <svg class="fa-camera">
                <use xlink:href="#fa-camera"></use>
              </svg>
              .background = Fullscreen Backgrounds
            </h4>
            <p class="text-intro"><a href="https://source.unsplash.com/">How to embed Unsplash photos? &rarr;</a></p>
            <pre>&lt;section&gt;
  &lt;span class="background" style="background-image:url('https://source.unsplash.com/nwfuaYecNUs/')"&gt;&lt;/span&gt;
  &lt;div class="wrap"&gt;
    &lt;h1&gt;Slide&lt;/h1&gt;
  &lt;/div&gt;
&lt;/section&gt;</pre>
            <p>
              <svg class="fa-info">
                <use xlink:href="#fa-info"></use>
              </svg>
              Position .background outside of .wrap container.
            </p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <span class="background-right-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span>
          <div class="wrap">
            <div class="content-left">
              <h3>.background-(position)</h3>
              <p><code>.background-right-bottom</code></p>
              <ul class="flexblock specs">
                <li>
                  <div>
                    <svg class="fa-wifi">
                      <use xlink:href="#fa-wifi"></use>
                    </svg>
                    <h2>Ultra-Fast WiFi</h2>
                    Simple and secure file sharing.
                  </div>
                </li>
                <li>
                  <div>
                    <svg class="fa-battery-full">
                      <use xlink:href="#fa-battery-full"></use>
                    </svg>
                    <h2>All day battery life</h2>
                    Your battery worries may be over.
                  </div>
                </li>
                <li>
                  <div>
                    <svg class="fa-life-ring">
                      <use xlink:href="#fa-life-ring"></use>
                    </svg>
                    <h2>Lifetime Warranty </h2>
                    We'll fix it or if we can't, we'll replace it.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <span class="background-left-bottom" style="background-image:url('../static/images/iphone-hand.png')"></span>
          <div class="wrap">
            <div class="content-right">
              <h3>.background-(position)</h3>
              <p><code>.background-left-bottom</code></p>
              <ul class="flexblock specs">
                <li>
                  <div>
                    <svg class="fa-wifi">
                      <use xlink:href="#fa-wifi"></use>
                    </svg>
                    <h2>Ultra-Fast WiFi</h2>
                    Simple and secure file sharing.
                  </div>
                </li>
                <li>
                  <div>
                    <svg class="fa-battery-full">
                      <use xlink:href="#fa-battery-full"></use>
                    </svg>
                    <h2>All day battery life</h2>
                    Your battery worries may be over.
                  </div>
                </li>
                <li>
                  <div>
                    <svg class="fa-life-ring">
                      <use xlink:href="#fa-life-ring"></use>
                    </svg>
                    <h2>Lifetime Warranty </h2>
                    We'll fix it or if we can't, we'll replace it.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="aligncenter bg-black">
          <span class="background anim" style="background-image:url('https://source.unsplash.com/n9WPPWiPPJw/')"></span>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap">
            <h2>.background.anim</h2>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-black aligncenter">
          <span class="background light" style="background-image:url('https://source.unsplash.com/1_CMoFsPfso/')"></span>
          <div class="wrap size-50">
            <h1 class="text-landing text-shadow">Opacity</h1>
            <p><code>[class*="bg-"] > .background.light</code></p>
            <pre>&lt;section class="bg-black"&gt;
  &lt;span class="background light" style="background-image:url('https://source.unsplash.com/1_CMoFsPfso/')"&gt;&lt;/span&gt;
  &lt;div class="wrap"&gt;
    &lt;h1&gt;Slide&lt;/h1&gt;
  &lt;/div&gt;
&lt;/section&gt;</pre>
          </div>
        </section>
        <section class="bg-black aligncenter">
          <span class="background dark" style="background-image:url('https://source.unsplash.com/1_CMoFsPfso')"></span>
          <div class="wrap size-50">
            <h1 class="text-landing text-shadow">Opacity</h1>
            <p><code>[class*="bg-"] > .background.dark</code></p>
            <pre>&lt;section class="bg-black"&gt;
  &lt;span class="background dark" style="background-image:url('https://source.unsplash.com/1_CMoFsPfso/')"&gt;&lt;/span&gt;
  &lt;div class="wrap"&gt;
    &lt;h1&gt;Slide&lt;/h1&gt;
  &lt;/div&gt;
&lt;/section&gt;</pre>
          </div>
        </section>
        <section>
          <div class="wrap size-50">
            <p class="text-subtitle">Optional &middot; 500+ icons</p>
            <h2>
              <a href="http://fontawesome.io/icons/">
                <svg class="fa-flag">
                  <use xlink:href="#fa-flag"></use>
                </svg>
                Font Awesome
              </a>
              as SVG icons
            </h2>
            <pre>&lt;svg class="fa-flag"&gt;
	&lt;use xlink:href="#fa-flag"&gt;&lt;/use&gt;
&lt;/svg&gt;</pre>
            <p>How to change icons?</p>
            <ol class="text-cols">
              <li>Go to <a href="http://fontastic.me/">fontastic.me</a>.</li>
              <li>Create a free account.</li>
              <li>Select new icons.</li>
              <li>Publish as SVG sprite.</li>
              <li>Edit <strong>svg-icons.css</strong> and <strong>svg.icons.js</strong>.</li>
            </ol>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-green">
          <div class="wrap">
            <h3>ul.flexblock.metrics.border</h3>
            <!-- li>a? Add blink = <ul class="flexblock metrics blink">-->
            <ul class="flexblock metrics border">
              <li> Founded
                <span>2024</span>
              </li>
              <li>
                <span>
                  <svg class="fa-users">
                    <use xlink:href="#fa-users"></use>
                  </svg>
                </span>
                24M Subscribers
              </li>
              <li>
                <span>
                  <svg class="fa-line-chart">
                    <use xlink:href="#fa-line-chart"></use>
                  </svg>
                </span>
                Revenue: $16M
              </li>
              <li>
                Monthly Growth
                <span>64%</span>
              </li>
              <li>
                <span>
                  <svg class="fa-building-o">
                    <use xlink:href="#fa-building-o"></use>
                  </svg>
                </span>
                8 Offices
              </li>
              <li>
                <span>
                  <svg class="fa-smile-o">
                    <use xlink:href="#fa-smile-o"></use>
                  </svg>
                </span>
                48 Employees
              </li>
              <li>
                <span>
                  <svg class="fa-usd">
                    <use xlink:href="#fa-usd"></use>
                  </svg>
                </span>
                EBITDA: $2,4M
              </li>
              <li>
                <span>
                  <svg class="fa-university">
                    <use xlink:href="#fa-university"></use>
                  </svg>
                </span>
                Bank: $32M
              </li>
            </ul>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap">
            <h2>Transparent Logos</h2>
            <p>
              Change the color of a .svg/.png image using CSS. Images are property of their respective owners.
            </p>
            <hr>
            <ul class="flexblock blink">
              <li>
                <a href="#" title="Block Link = .blink">
                  <div>
                    <img src="/static/images/logos/google.svg" alt="Google">
                    <p><strong>Height recommended</strong>: 48px</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" title="Block Link = .blink">
                  <div>
                    <img class="blacklogo" src="/static/images/logos/airbnb.svg" alt="Airbnb">
                    <p><code>img.blacklogo</code></p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" title="Block Link = .blink">
                  <div>
                    <img class="graylogo" src="/static/images/logos/microsoft.svg" alt="Microsoft">
                    <p><code>img.graylogo</code></p>
                  </div>
                </a>
              </li>
              <li class="bg-blue">
                <a href="" title="Block Link = .blink">
                  <div>
                    <img class="whitelogo" src="/static/images/logos/netflix.svg" alt="Netflix">
                    <p><code>img.whitelogo</code></p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <!--.wrap = container (width: 90%) -->
          <div class="wrap">
            <blockquote class="text-quote">
              <p>An avatar is the graphical representation of the user or the user's alter ego or character. The <a href="https://en.wikipedia.org/wiki/Avatar_(computing)">word avatar</a> originates in Hinduism.</p>
              <p><cite> <a href="http://twitter.com/username/"><img class="avatar-56" src="/static/images/avatar.jpg" alt="Avatar"> @username</a>, .avatar-56</cite></p>
            </blockquote>
            <hr>
            <p><code>img[class*="avatar-"]</code> (80, 72, 64, 56, 48, and 40).</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap">
            <div class="grid vertical-align">
              <div class="column">
                <h2>Devices</h2>
                <ul class="flexblock specs">
                  <li>
                    <div>
                      <svg class="fa-wifi">
                        <use xlink:href="#fa-wifi"></use>
                      </svg>
                      <h2>Ultra-Fast WiFi</h2>
                      Simple and secure file sharing.
                    </div>
                  </li>
                  <li>
                    <div>
                      <svg class="fa-battery-full">
                        <use xlink:href="#fa-battery-full"></use>
                      </svg>
                      <h2>All day battery life</h2>
                      Your battery worries may be over.
                    </div>
                  </li>
                  <li>
                    <div>
                      <svg class="fa-life-ring">
                        <use xlink:href="#fa-life-ring"></use>
                      </svg>
                      <h2>Lifetime Warranty </h2>
                      We'll fix it or if we can't, we'll replace it.
                    </div>
                  </li>
                </ul>
              </div>
              <!-- end .column-->
              <div class="column">
                <figure>
                  <img class="aligncenter" src="/static/images/iphone.png" alt="iPhone">
                </figure>
              </div>
              <!-- end .column-->
            </div>
            <!-- end .grid-->
          </div>
          <!-- end .wrap-->
        </section>
        <section>
          <div class="wrap">
            <div class="content-left">
              <figure class="browser">
                <img alt="Screenshot" src="https://webslides.tv/static/images/cover-apple.jpg">
              </figure>
            </div>
            <!-- .end .content-left -->
            <div class="content-left">
              <h2>Screenshots</h2>
              <p>HTML/CSS Browser.</p>
              <pre>&lt;figure class="browser"&gt;
  &lt;img alt="Screenshot" src="image.jpg"&gt;
&lt;/figure&gt;</pre>
            </div>
            <!-- .end .content-left -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-blue">
          <span class="background dark" style="background-image:url('https://source.unsplash.com/R1J6Z1cnJZc/1600x800)"></span>
          <!-- background with a frame frame -->
          <span class="background frame"></span>
          <div class="wrap aligncenter">
            <h2>
              Videos
            </h2>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap size-60">
            <h3>Background videos</h3>
            <pre><strong>&lt;section class="fullscreen"&gt;</strong>
  &lt;div class="embed"&gt;
    &lt;video autoplay loop poster="image.jpg"&gt;
      &lt;source src="video.mp4" type="video/mp4"&gt;
    &lt;/video&gt;
  &lt;/div&gt;
<strong>&lt;/section&gt;</strong>
</pre>
            <p>.fullscreen > .embed (responsive) > video</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="fullscreen aligncenter">
          <div class="embed">
            <video autoplay loop poster="https://webslides.tv/static/images/peggy.jpg">
              <source src="https://webslides.tv/static/videos/peggy.mp4" type="video/mp4">
            </video>
          </div>
        </section>
        <section>
          <div class="wrap size-60">
            <h3>Background videos</h3>
            <p>Transparent overlay:</p>
            <pre><strong>&lt;section class="fullscreen bg-blue"&gt;</strong>
  &lt;div class="embed <strong>dark</strong>"&gt;
    &lt;video autoplay muted loop poster="image.jpg"&gt;
      &lt;source src="video.mp4" type="video/mp4"&gt;
    &lt;/video&gt;
  &lt;/div&gt;
<strong>&lt;/section&gt;</strong>
</pre>
            <p>.fullscreen.bg-blue > .embed.dark (or .light) > video</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="fullscreen bg-blue aligncenter">
          <div class="embed dark">
            <video autoplay loop muted poster="https://webslides.tv/static/images/peggy.jpg">
              <source src="https://webslides.tv/static/videos/peggy.mp4" type="video/mp4">
            </video>
          </div>
          <!-- .end .embed -->
          <div class="wrap">
            <h2><strong>Muted</strong></h2>
            <p>Overlay: <code>section.fullscreen.bg-blue > embed.dark</code> or .light</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap">
            <div class="content-left">
              <h3>Responsive Videos</h3>
              <p>Just copy and paste the code from YouTube to your slide.</p>
              <pre>&lt;div class="embed"&gt;
 <strong>&lt;iframe src="https://www.youtube.com/embed/XjJQBjWYDTs"&gt;
 &lt;/iframe&gt;</strong>
&lt;/div&gt;</pre>
              <p><code>.embed</code> (responsive)</p>
            </div>
            <!-- end .content-left -->
            <div class="content-left">
              <!-- <div class="embed"> = Responsive -->
              <div class="embed">
                <iframe src="https://www.youtube.com/embed/XjJQBjWYDTs" allowfullscreen></iframe>
              </div>
              <!-- end .embed -->
            </div>
            <!-- end .content-left -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap size-60">
            <!-- Responsive video/iframe... Add <div class="embed"> -->
            <div class="embed">
              <iframe width="800" height="450" src="https://www.youtube.com/embed/3Q3eITC01Fg" allowfullscreen></iframe>
            </div>
            <!-- .end .embed -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap size-60">
            <h3>Fullscreen YouTube Video</h3>
            <pre><strong>&lt;section class="fullscreen"&gt;</strong>
  &lt;div class="embed"&gt;
    &lt;iframe src="https://www.youtube.com/embed/iY05U7GaU5I"&gt;
    &lt;/iframe&gt;
  &lt;/div&gt;
<strong>&lt;/section&gt;</strong>
</pre>
            <p><code>.fullscreen</code> > <code>.embed</code> (responsive)</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="fullscreen">
          <!-- Fullscreen Video -->
          <div class="embed">
            <iframe width="800" height="450" src="https://www.youtube.com/embed/xSMB7kBynZA?playsinline=1" allowfullscreen></iframe>
          </div>
          <!-- .end .embed -->
        </section>
        <section class="frame">
          <p class="aligncenter">
            <svg class="fa-thumbs-up large">
              <use xlink:href="#fa-thumbs-up"></use>
            </svg>
          </p>
          <div class="wrap size-60 bg-white">
            <h3>
              <a href="https://developers.google.com/youtube">
                <svg class="fa-youtube">
                  <use xlink:href="#fa-youtube"></use>
                </svg>
                YouTube API
              </a>
            </h3>
            <p class="text-intro">Embed videos with <strong>loop, autoplay, and muted</strong> attributes. The video will automatically play when the slide is loaded.</p>
            <p><strong>You should use a local or a remote server</strong> since the YouTube API doesn't seem to work nicely when using the file directly on the browser.</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap">
            <h3>
              <svg class="fa-youtube">
                <use xlink:href="#fa-youtube"></use>
              </svg>
              YouTube API Parameters
            </h3>
            <p>Syntax: <code>data-autoplay, data-loop, data-no-controls, data-mute</code>.</p>
            <hr>
            <div class="grid">
              <div class="column">
                <pre>&lt;div class="embed"&gt;
  <strong>&lt;div data-youtube data-youtube-id=&quot;CQY3KUR3VzM&quot; data-autoplay data-loop&gt;
  &lt;/div&gt;</strong>
&lt;/div&gt;</pre>
                <p>autoplay + loop</p>
              </div>
              <!-- .end .column -->
              <div class="column">
                <pre>&lt;div class="embed"&gt;
  <strong>&lt;div data-youtube data-youtube-id=&quot;CQY3KUR3VzM&quot; data-autoplay data-mute data-no-controls&gt;
  &lt;/div&gt;</strong>
&lt;/div&gt;</pre>
                <p>autoplay + mute + no controls.</p>
              </div>
              <!-- .end .column -->
            </div>
            <!-- .end .grid -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap">
            <div class="content-left">
              <h3>YouTube API</h3>
              <p><code>autoplay + loop</code></p>
              <pre>&lt;div class="embed"&gt;
  &lt;div data-youtube data-youtube-id=&quot;_m67JbGjWnc&quot; <strong>data-autoplay data-loop</strong>&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
            </div>
            <!-- end .content-left -->
            <div class="content-left">
              <!-- <div class="embed"> = Responsive -->
              <div class="embed">
                <div data-youtube data-youtube-id="_m67JbGjWnc" data-autoplay data-loop></div>
              </div>
              <!-- end .embed -->
            </div>
            <!-- end .content-left -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="frame">
          <div class="wrap size-60 bg-white">
            <h3>
              <svg class="fa-info-circle large">
                <use xlink:href="#fa-info-circle"></use>
              </svg>
              <strong>Autoplay Feature</strong>
            </h3>
            <p class="text-intro">Autoplay is generally disabled on all mobile devices to prevent bandwidth consumption. User must execute the play manually.</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap size-70">
            <h3><strong>Let's make some magic with the YouTube API</strong></h3>
            <p>How to make a fullscreen YouTube video? <code>.fullscreen > .embed</code></p>
            <hr>
            <pre><strong>&lt;section class="fullscreen"&gt;</strong>
  &lt;div class="embed"&gt;
    &lt;div data-youtube data-youtube-id=&quot;dmkwb2KfLW8&quot; <strong>data-autoplay data-loop data-no-controls</strong>&lt;/div&gt;
  &lt;/div&gt;
<strong>&lt;/section&gt;</strong>
</pre>
            <p>The video will automatically play when the slide is loaded.</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="fullscreen">
          <!-- Fullscreen Video -->
          <div class="embed">
            <div data-youtube data-youtube-id="dmkwb2KfLW8" data-autoplay data-loop data-no-controls></div>
          </div>
          <!-- .end .embed -->
        </section>
        <section>
          <div class="wrap size-70">
            <h3><strong>Fullscreen YouTube video background</strong></h3>
            <p>Overlaying a transparent background on an embedded Youtube video:</p>
            <hr>
            <pre><strong>&lt;section class="fullscreen bg-black"&gt;</strong>
  &lt;div class="embed dark"&gt;
    &lt;div data-youtube data-youtube-id=&quot;c9psfOxJysw&quot; <strong>data-autoplay data-loop data-mute data-no-controls</strong>&lt;/div&gt;
  &lt;/div&gt;
<strong>&lt;/section&gt;</strong>
</pre>
            <p><code>.fullscreen[class*="bg-"] > .embed.dark</code> or .light</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="fullscreen bg-blue">
          <!-- Fullscreen Video -->
          <div class="embed dark">
            <div data-youtube data-youtube-id="SomZsr1J7ao" data-autoplay data-loop data-mute data-no-controls></div>
          </div>
          <!-- .end .embed -->
          <div class="wrap aligncenter">
            <h2><strong>Overlay</strong></h2>
            <p><code>.fullscreen[class*="bg-"] > .embed.dark</code> or .light</p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-primary">
          <span class="background-bottom dark" style="background-image:url('https://source.unsplash.com/RkBTPqPEGDo/1600x800)"></span>
          <div class="wrap aligncenter">
            <h3>
              <svg class="fa-map">
                <use xlink:href="#fa-map"></use>
              </svg>
              Maps & Charts
            </h3>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-black-blue">
          <div class="wrap size-50">
            <p class="text-context">Status of Net Neutrality around the world.</p>
            <div class="embed">
              <iframe width='800' height='450' src='https://dejiaccessnow.carto.com/viz/4f239c60-356f-11e5-b01c-0e853d047bba/embed_map' allowfullscreen></iframe>
            </div>
            <!-- .end .embed -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section>
          <div class="wrap">
            <div class="card-50 bg-white">
              <figure>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.254536199183!2d-5.994303837186783!3d37.38381233311839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbaa976bfaec1fe87!2sReal+Alc%C3%A1zar+de+Sevilla!5e0!3m2!1ses!2ses!4v1489408674667" width="800" height="600" allowfullscreen></iframe>
                <figcaption>
                  <a href="https://maps.google.com" title="Google Maps">
                    <svg class="fa-map">
                      <use xlink:href="#fa-map"></use>
                    </svg>
                    Google Maps
                  </a>
                </figcaption>
              </figure>
              <!-- end figure-->
              <div class="flex-content">
                <h2>
                  Discover Seville
                </h2>
                <p>.card-50.bg-white</p>
                <ul class="description">
                  <li>
                    <strong class="text-label" title="Density">Density:</strong> 140/km<sup>2</sup>
                  </li>
                  <li><strong class="text-label" title="Population">Population:</strong> 703,021</li>
                  <li><strong class="text-label" title="Website">Website:</strong> <a href="http://www.visitasevilla.es/en">visitasevilla.es</a></li>
                </ul>
                <p>
                  There are many reasons to visit Seville. Its Old Town contains three UNESCO World Heritage Sites: the Alcazar palace complex, the Cathedral and the General Archive of the Indies.
                </p>
              </div>
              <!-- end .flex-content-->
            </div>
            <!-- end .card-50-->
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="fullscreen">
          <div class="embed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.254536199183!2d-5.994303837186783!3d37.38381233311839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbaa976bfaec1fe87!2sReal+Alc%C3%A1zar+de+Sevilla!5e0!3m2!1ses!2ses!4v1489408674667" width="800" height="600" allowfullscreen></iframe>
          </div>
          <!-- .end .embed -->
        </section>
        <section>
          <div class="wrap size-60">
            <h3><a href="https://www.theatlas.com/" title="I love Quartz's charts">Charts</a></h3>
            <!-- Responsive video/iframe/chart... Add <div class="embed"> -->
            <div class="embed">
              <!-- I love Quartz's charts -->
              <div class="atlas-chart" data-id="rJt91kGnx" data-width="640" data-height="449"><img alt="Chart" src="https://www.theatlas.com/i/atlas_rJt91kGnx.png" style="max-width: 100%;"></div>
              <script src="https://www.theatlas.com/javascripts/atlas.js"></script>
            </div>
            <!-- end .embed -->
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="aligncenter">
          <!-- .wrap = container width: 90% -->
          <div class="wrap">
            <h2><strong>Start in seconds</strong></h2>
            <p class="text-intro">120+ prebuilt slides ready to use.</p>
            <p>
              <a href="https://webslides.tv/webslides-latest.zip" class="button ga-track" data-ga-text="Download WebSlides (last slide demos)" title="Download WebSlides">
                <svg class="fa-cloud-download">
                  <use xlink:href="#fa-cloud-download"></use>
                </svg>
                Free Download
              </a>
              <span class="try">
                <a href="https://www.paypal.me/jlantunez/8" title="Thanks :)">
                  <svg class="fa-paypal">
                    <use xlink:href="#fa-paypal"></use>
                  </svg>
                  Pay what you want.
                </a>
              </span>
            </p>
          </div>
          <!-- .end .wrap -->
        </section>
        <section class="bg-primary aligncenter">
          <h2 class="text-emoji zoomIn"><strong><a href="https://webslides.tv" title="WebSlides">😎</a></strong></h2>
          <h3><a href="https://twitter.com/webslides" title="WebSlides on Twitter">@WebSlides</a></h3>
        </section>
      </article>
    </main>
    <!--main-->
    <!-- Required -->
    <script src="/static/js/webslides.js"></script>
    <script>
      window.ws = new WebSlides();
    </script>
    <!-- OPTIONAL - svg-icons.js (fontastic.me - Font Awesome as svg icons) -->
    <script defer src="/static/js/svg-icons.js"></script>
  </body>
</html>
