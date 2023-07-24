import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");

  return (
    <div className="home-page">
        <div className="home-page-child" />
        <div className="home-page-inner">
          <div className="rectangle-parent">
            <div className="group-child" />
            <div className="group-item" />
            <div className="vuesaxlinearsearch-normal">
              <img
                className="vuesaxlinearsearch-normal-icon"
                alt=""
                src="/vuesaxlinearsearchnormal.svg"
              />
              <div className="search-for-friends">Search</div>
            </div>
          </div>
        </div>
        <img className="home-page-item" alt="" src="gS_nlogo.png" />
        <div className="left-panel">
          <div className="rectangle-group">
            <img className="group-inner" alt="" src="/rectangle-7@2x.png" />
            <div className="steve-rogers">Steve Rogers</div>
          </div>
          <div className="explore-panel-parent">
            <div className="explore-panel">Explore panel</div>
            <div className="profile-parent">
              <div className="profile">Profile</div>
              <img className="group-icon" alt="" src="/group-8.svg" />
            </div>
            <div className="find-friends-parent">
              <div className="profile">Find friends</div>
              <img className="group-icon" alt="" src="/group-81.svg" />
            </div>
            <div className="user-analytics-parent">
              <div className="profile">User analytics</div>
              <img className="group-icon" alt="" src="/group-82.svg" />
            </div>
          </div>
          <div className="settings-parent">
            <div className="explore-panel">Settings</div>
            <div className="settings-group">
              <div className="profile">Settings</div>

              <img className="group-icon" alt="" src="/group-83.svg" />
            </div>
            <div className="security-data-parent">
              <div className="profile">Security data</div>
              <img className="group-icon" alt="" src="/group-84.svg" />
            </div>
            <div className="log-out-parent">
              <div className="profile">Log out</div>
              <img className="group-icon" alt="" src="/group-85.svg" />
            </div>
          </div>
        </div>
        {/* following card starts here*/}
        <div className="left-panel1">
          <div className="people-you-may">People you may know</div>
          <div className="left-panel-inner">
            <div className="group-parent">
              <div className="tony-stark-parent">
                <div className="tony-stark">Tony Stark</div>
                <div className="i-am-a">I am a metal man, who saves lots..</div>
                <div className="m-followers">6M+ Followers</div>
              </div>
              <img
                className="rectangle-icon"
                alt=""
                src="/rectangle-10@2x.png"
              />
            </div>
          </div>
          <div className="left-panel-child">
            <div className="group-parent">
              <div className="tony-stark-parent">
                <div className="tony-stark">Bruce Banners</div>
                <div className="green-human-with">
                  Green human with scietific kno....
                </div>
                <div className="m-followers">3M+ Followers</div>
              </div>
              <img
                className="rectangle-icon"
                alt=""
                src="/rectangle-101@2x.png"
              />
            </div>
          </div>

          <div className="ellipse-parent">
            <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
            <div className="natasha-ramanoff-parent">
              <h6 className="notifications">Notifications</h6>
              <div className="natasha-ramanoff">Natasha Ramanoff</div>
              <div className="tagged-you-in">
                Tagged you in her 250th post a..
              </div>
            </div>
          </div>
          <div className="ellipse-group">
            <img className="ellipse-icon" alt="" src="/ellipse-11@2x.png" />
            <div className="barton-clint-parent">
              <div className="natasha-ramanoff">Barton Clint</div>
              <div className="tagged-you-in">
                Liked your comment on their po...
              </div>
            </div>
          </div>
        </div>
        <div className="left-panel2">
          <div className="boost-your-post">Boost your post</div>
          <img
            className="left-panel-child1"
            alt=""
            src="/rectangle-11@2x.png"
          />
          <div className="steve-rogers-parent">
            <div className="steve-rogers1">@steve_rogers</div>
            <div className="with-my-lovable">With my lovable</div>
            <div className="dog-named-bruno">{`dog named Bruno with a smile &....`}</div>
          </div>
          <div className="others-liked-your-post-parent">
            <div className="others-liked-your">{`& 180 others liked your post & ...`}</div>
            <img className="group-child8" alt="" src="/group-27.svg" />
          </div>
        </div>
        {/* profile-info here */}
        <div className="group-div">
          <div className="group-parent1">
            <div className="rectangle-container">
              <div className="rectangle-div" />
              <img
                className="group-child10"
                alt=""
                src="/rectangle-71@2x.png"
              />
            </div>
            <div className="steve-rogers-group">
              <div className="steve-rogers2">Steve Rogers</div>
              <div className="steve-rogers3">@steve_rogers</div>
            </div>
          </div>
        </div>
        {/* post-section-card */}
        <div className="rectangle-parent1">
          <div className="group-child11" />
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector-11.svg" />
            <div className="group-parent2">
              <div className="ellipse-container">
                <div className="ellipse-div" />
                <img
                  className="vuesaxboldedit-2-icon"
                  alt=""
                  src="/vuesaxboldedit2.svg"
                />
                <div className="write-a-post">Create Post</div>
              </div>
              <div className="ellipse-parent1">
                <div className="ellipse-div" />
                <img
                  className="vuesaxboldedit-2-icon"
                  alt=""
                  src="/vuesaxboldgalleryadd.svg"
                />
                <div className="write-a-post">Upload photo</div>
              </div>
              <div className="ellipse-parent2">
                <div className="ellipse-div" />
                <img
                  className="vuesaxboldedit-2-icon"
                  alt=""
                  src="/vuesaxboldvideocircle.svg"
                />
                <div className="write-a-post">Upload video</div>
              </div>
            </div>
            <div className="rectangle-parent2">
              <div className="write-something-here-parent">
                <div className="group-child14">
                  <form className="write-something-here">
                    <input
                      type="text"
                      className="post-input-space"
                      placeholder="Write something here..."
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>
            <button className="post-btn">Post</button>
          </div>
        </div>

        {/* post card*/}
        <div className="rectangle-parent3">
          <div className="group-child11" />
          <div className="group-parent3">
            <div className="rectangle-parent4">
              <img
                className="rectangle-icon"
                alt=""
                src="/rectangle-10@2x.png"
              />
              <div className="group-parent4">
                <div className="tony-stark-group">
                  <div className="natasha-ramanoff">Tony Stark</div>
                  <div className="tony-stark-3000">@tony_stark_3000</div>
                </div>
                <div className="cognitive-person">
                  Cognitive Person | Enthusiastic scientist | Worked on 300.....
                </div>
              </div>
            </div>
            <div className="immediate-hiring-parent">
              <div className="natasha-ramanoff">*Immediate HIRING*</div>
              <div className="looking-for-an-container">
                <p className="looking-for-an">{`Looking for an amazing scientist who knows how to build a suit `}</p>
                <p className="looking-for-an">
                  that can fly high in the sky without any problem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent5">
          <div className="group-child17" />
          <div className="group-parent5">
            <div className="exploring-the-amazing-nature-w-wrapper">
              <div className="exploring-the-amazing-container">
                <p className="looking-for-an">
                  Exploring the amazing nature with my loved daughter and wife.
                  These
                </p>
                <p className="looking-for-an">
                  kind of visuals can soothen your mind, no matter what is your
                  problem
                </p>
                <p className="looking-for-an">
                  and it makes you to forget all your pains.
                </p>
              </div>
            </div>
            <div className="rectangle-parent6">
              <img
                className="rectangle-icon"
                alt=""
                src="/rectangle-102@2x.png"
              />
              <div className="group-parent6">
                <div className="paul-rudd-parent">
                  <div className="natasha-ramanoff">Paul Rudd</div>
                  <div className="antman-wasp">@antman_wasp</div>
                </div>
                <div className="cognitive-person">
                  Smallest creature in this beautiful universe | Flying in
                  colo....
                </div>
              </div>
            </div>
            <img className="group-child19" alt="" src="/rectangle-16@2x.png" />
          </div>
        </div>
      </div>
  );
};

export default Home;
