import React from 'react'

export const Reveiw = () => {
  return (
    <div className="review-bloc l-wrap__outer">
      <div className="review-bloc__inner l-wrap__inner">
        <div className="rating-box">
          <div className="rating-box__inner">
            <ul>
              <li className="rate">4.8</li>
              <li className="star">
                <img src="../img/common/icon_rating.png" alt="Rating image" />
              </li>
              <li className="review">Trustscore on 365 reviews</li>
            </ul>
            <a href="#" className="review-link">
              See All Reviews &gt&gt
            </a>
          </div>
        </div>
        <div className="review-list review-slider">
          <div className="review-box">
            <div className="review-box__inner">
              <ul>
                <li className="profile">
                  <img src="../img/common/user1.png" alt="Profile" />
                </li>
                <li>Thiha Kyaw</li>
              </ul>
              <p>
                "Thanks guys, keep up the good work! Great job, I will definitely be ordering again! Thanks guys, keep up the
                good work! Garden was worth a fortune to my company."
              </p>
            </div>
          </div>
          <div className="review-box">
            <div className="review-box__inner">
              <ul>
                <li className="profile">
                  <img src="../img/common/user3.png" alt="Profile" />
                </li>
                <li>Zayar Tun</li>
              </ul>
              <p>
                "Thanks guys, keep up the good work! Great job, I will definitely be ordering again! Thanks guys, keep up the
                good work! Garden was worth a fortune to my company."
              </p>
            </div>
          </div>
          <div className="review-box">
            <div className="review-box__inner">
              <ul>
                <li className="profile">
                  <img src="../img/common/user2.png" alt="Profile" />
                </li>
                <li>Thet Htoo Htoo San</li>
              </ul>
              <p>
                "Thanks guys, keep up the good work! Great job, I will definitely be ordering again! Thanks guys, keep up the
                good work! Garden was worth a fortune to my company."
              </p>
            </div>
          </div>
          <div className="review-box">
            <div className="review-box__inner">
              <ul>
                <li className="profile">
                  <img src="../img/common/user4.png" alt="Profile" />
                </li>
                <li>Kyawt Kyawt San</li>
              </ul>
              <p>
                "Thanks guys, keep up the good work! Great job, I will definitely be ordering again! Thanks guys, keep up the
                good work! Garden was worth a fortune to my company."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
