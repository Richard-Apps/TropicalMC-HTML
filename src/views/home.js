import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>TropicalMC</title>
        <meta
          name="description"
          content="TropicalMC is a minecraft server project, which contains a lot of fun PVP and PVE game modes, that keeps you entertained for hours! Join now via tropicalmc.uk!"
        />
        <meta property="og:title" content="TropicalMC" />
        <meta
          property="og:description"
          content="TropicalMC is a minecraft server project, which contains a lot of fun PVP and PVE game modes, that keeps you entertained for hours! Join for free!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5c9ccf50-8c90-43b0-8b46-a324ed0d9ea4/2e8d1a16-396e-40cc-aa1e-6bece4531874?org_if_sml=1"
        />
      </Helmet>
      <div className="home-container01">
        <div id="main" className="home-main">
          <span id="serverip" className="home-text">
            tropicalmc.uk
          </span>
          <div className="home-background">
            <img
              alt="image"
              src="/playground_assets/neues%20projekt%5B1%5D-1500w.png"
              className="home-image"
            />
            <video
              src="/playground_assets/minecraft_%201.19.2%20-%20singleplayer%202022-10-30%2020-09-04_20.16.44.mp4"
              loop
              muted
              poster="/playground_assets/out-filme%20%26%20tv%2030.10.2022%2020_33_52-7500w.png"
              autoPlay
              className="home-video"
            ></video>
          </div>
          <div className="home-slogan">
            <span className="home-text01">
              <span>TROPICALMC,</span>
              <br></br>
              <span>A OASIS FULL OF GAMEMODES</span>
            </span>
          </div>
          <div className="home-container02">
            <span className="home-text05">
              <span>ABOUT US</span>
              <br></br>
            </span>
            <span className="home-text08">
              <span>
                TropicalMC is a Minecraft server with a variety of gamemodes to
                keep you entertained. Whether you&apos;re in the mood for some
                competitive
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text10">PvP action</span>
              <span>
                , or just want to relax and play our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text12">fantasy mode</span>
              <span>
                , we&apos;ve got you covered. Our friendly community is always
                happy to help new players, so come join us and see what all the
                hype is about!
              </span>
            </span>
            <div className="home-container03">
              <button
                id="playnow"
                type="button"
                onclick="copyClip()"
                className="home-playnow button"
              >
                <span id="playnowtext" className="home-text14">
                  <span>PLAY NOW</span>
                  <br></br>
                </span>
              </button>
              <a href="#learnmore" className="home-learnmore button">
                <span className="home-text17">
                  <span>LEARN MORE</span>
                  <br></br>
                </span>
              </a>
              <a href="#ourteam" className="home-ourteam button">
                <span className="home-text20">
                  <span>OUR TEAM</span>
                  <br></br>
                </span>
              </a>
            </div>
            <a
              href="https://discord.io/tropical-mc"
              target="_blank"
              rel="noreferrer noopener"
              className="home-endtext"
            >
              <span>
                2022 TROPICALMC ✦
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text24">discord.io/tropical-mc</span>
              <br></br>
            </a>
          </div>
        </div>
        <div id="learnmore" className="home-learnmore1">
          <div id="background" className="home-container04">
            <div className="home-gamemodes">
              <h1 className="home-text26">
                <span>
                  POPULAR + UNIQUE GAMEMODES
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </h1>
              <span className="home-text29">
                We offer main-stream gamemodes, but also one&apos;s you&apos;ll
                only find here! We have something for everyone!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-container05">
                <div className="home-container06">
                  <div className="home-container07"></div>
                  <span className="home-text30">
                    <span>
                      Protect your team&apos;s bed against others! Respawns are
                      activated only for those with a bed left.
                    </span>
                    <br></br>
                  </span>
                  <span className="home-title">BEDWARS</span>
                </div>
                <div className="home-container08">
                  <div className="home-container09"></div>
                  <span className="home-text33">Mine and PvP!</span>
                  <span className="home-title1">
                    <span>CAVE PVP</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-container10">
                  <div className="home-container11"></div>
                  <span className="home-text36">
                    Battle against monsters and finish quests in a big
                    fully-detailed open world adventure!
                  </span>
                  <span className="home-title2">FANTASY</span>
                </div>
              </div>
              <span className="home-text37">
                <span className="home-text38">More gamemodes</span>
                <span> are already under development!</span>
                <br></br>
              </span>
            </div>
            <a href="#main" className="home-scrolltop button">
              <span className="home-text41">
                <span>BACK TO TOP</span>
                <br></br>
              </span>
            </a>
            <div className="home-media">
              <div className="home-container12">
                <iframe
                  src="https://www.youtube.com/embed/Hd5Q8SWMD80"
                  allowFullScreen
                  className="home-iframe"
                ></iframe>
                <img
                  alt="image"
                  src="/playground_assets/out-2022-07-09_23.45.19-400h.png"
                  className="home-image1"
                />
              </div>
              <span className="home-text44">
                <span>
                  To get updates early and engage with our community, join our
                  official discord server.
                </span>
                <br></br>
              </span>
              <a
                href="https://discord.io/tropical-mc"
                target="_blank"
                rel="noreferrer noopener"
                className="home-discord button"
              >
                <img
                  alt="image"
                  src="/playground_assets/20-200938_discord-png-200h.png"
                  className="home-image2"
                />
                <span className="home-text47">
                  <span>JOIN OUR DISCORD</span>
                  <br></br>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div id="ourteam" className="home-ourteam1">
          <div className="home-container13">
            <div className="home-container14">
              <h1 className="home-text50">
                <span>OUR TEAM</span>
                <br></br>
              </h1>
              <span className="home-text53">
                <span>
                  We are a total of 9 team members, who all share the same
                  passion about TropicalMC; to create a server everybody is
                  welcome on.
                </span>
                <br></br>
              </span>
              <div className="home-teammembers">
                <AppComponent
                  name="OWNER Niko"
                  image_src="/playground_assets/0a3518d89f1245e1b70defec41ed38e3-200h.png"
                  description="I advance the server during the times I'm not taking care of my cows and chickens."
                  rootClassName="app-component-root-class-name3"
                ></AppComponent>
                <div className="home-admin">
                  <AppComponent
                    name="ADMIN Fab X Produktion"
                    image_src="/playground_assets/fxp-200h.png"
                    description="Living in Germany; working part-time in the film industry"
                    rootClassName="app-component-root-class-name"
                  ></AppComponent>
                  <AppComponent
                    name="ADMIN RichardApps"
                    image_src="/playground_assets/dalle_2022-10-08_19.31.54-200h.png"
                    description="Self-taught DEV; There will always be something to improve."
                    rootClassName="app-component-root-class-name2"
                  ></AppComponent>
                </div>
                <div className="home-builder">
                  <AppComponent
                    name="BUILDER Amazing J H"
                    image_src="/playground_assets/img_2193-200h.jpg"
                    rootClassName="app-component-root-class-name16"
                    description="Interested in coding, scripting and building!"
                  ></AppComponent>
                  <AppComponent
                    name="BUILDER Madmonkey234"
                    rootClassName="app-component-root-class-name17"
                  ></AppComponent>
                  <AppComponent
                    name="BUILDER Sscript"
                    rootClassName="app-component-root-class-name18"
                  ></AppComponent>
                </div>
                <div className="home-test-supporter">
                  <AppComponent
                    name="TEST-SUP Dankskuboi"
                    rootClassName="app-component-root-class-name14"
                    image_src="/playground_assets/static-200h.png"
                  ></AppComponent>
                  <AppComponent
                    name="TEST-SUP King"
                    rootClassName="app-component-root-class-name15"
                    image_src="/playground_assets/screen_shot_2022-08-18_at_11.37.46_am-200w.png"
                    description="Always here to help!"
                  ></AppComponent>
                </div>
              </div>
              <a
                href="https://discord.io/tropical-mc"
                target="_blank"
                rel="noreferrer noopener"
                className="home-support button"
              >
                <span className="home-text56">
                  <span>JOIN OUR TEAM</span>
                  <br></br>
                </span>
              </a>
            </div>
          </div>
          <a href="#main" className="home-scrolltop1 button">
            <span className="home-text59">
              <span>BACK TO TOP</span>
              <br></br>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
