import React from "react";
import Header from "../../components/Header";
import detailImg2 from '../../assests/detailImg2.jpg'
import detailImg1 from '../../assests/detailImg1.jpg'
import detailImg3 from '../../assests/detailImg3.png'
import detailImg4 from '../../assests/detailImg4.jpg'
import detailImg5 from '../../assests/detailImg5.jpg'
import detailImg6 from '../../assests/detailImg6.jpg'
import { Footer } from "../../components/Footer";

const Details = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-screen flex flex-col">
        <div className="mt-[80px] mx-24">
          <h1 className="text-[30px] my-8 text-yellow-600 font-bold ">Landmark 81 Vietnam - Discover a resort paradise in the clouds in Saigon</h1>

          <div className="text-justify">
            <p className="my-5">Landmark 81 Vietnam has been the tallest skyscraper in the country until now. This is a magnificent structure with a total floor area of 141,000 square meters that includes hotels, serviced apartments, officetel commercial apartments, shopping centers, bars, restaurants, observation decks, and other amenities.</p>

            <img className="w-full h-full object-cover my-5" src={detailImg1} />

            <p><strong>Landmark 81 Vietnam </strong> is a super-tall building in Ho Chi Minh City. It is currently the tallest structural work in Vietnam, the second tallest building in Southeast Asia, and the world's 17th tallest building. This mixed-use building has office space, luxury apartments, a 5-star hotel, and a multi-story observation deck. Without any doubt, climbing the Landmark 81 Vietnam is a must-try activity in Saigon.</p>

            <div className="my-5">
              <h3 className="text-[24px] text-yellow-600 font-bold ">Where is Landmark 81?</h3>

              <p className="my-5">The Landmark 81 Vietnam building has 81 floors and a gross floor area of 241,000 square meters. According to the designer, the tower's design is inspired by the traditional bamboo bundle which  represents strength and unity in Vietnamese culture. The Landmark 81, which has many outstanding first-time features in Vietnam, not only breaks the record for the highest building in Vietnam but also creates other records such as the highest observation deck in Vietnam, the tallest skyscraper in Vietnam, and the highest bar and restaurant in Southeast Asia.</p>
              
              <img src={detailImg2} className="block ml-auto mr-auto w-[50%] "/>

              <p className="my-5">In addition, this is the most luxurious building in Vietnam which was designed by world-renowned architects and consultants. It was Atkins -  a company that frequently designs world-class projects such as the Bahrain World Trade Center, King Abdulaziz International Airport (Saudi Arabia), Lotus Hotel (Shanghai, China), and others.</p>

              <p className="my-5">Besides, it is regarded as Vietnam's largest green building. The tower's exterior is entirely made of Low-E glass – the category of glass that provides the architecture with functions such as light transmission, temperature control, and radiation prevention to make the interior receive enough light while also ensuring a fantastic space and stable temperature.</p>

              <p><strong className="text-yellow-600">Address: </strong> <i>720A Dien Bien Phu Street, Ward 22, Binh Thanh District, Ho Chi Minh City</i></p>
              
              <p><strong className="text-yellow-600">Other information: </strong> </p>
              <div className="ml-5">
                <p><i>- Vincom Center, a high-end shopping center, occupies the bottom three floors.</i></p>
                <p><i>- The 4th to 41st floors are residential spaces.</i></p>
                <p><i>- The Vinpearl Landmark 81, Autograph Collection starts from the 47th floor and upward and offers 223 rooms and suites with spectacular views of the city.</i></p>
                <p><i>- The technical rooms are on the 21st, 46th, 64th, and 78th floors.</i></p>
                <p><i>- The observation deck is on the uppermost floors (79th to 81st floors).</i></p>
                <p><i>- Restaurants and bars operate on the 66th and 67th floors of the tower.</i></p>
              <p><i>- The small antenna placed atop the spire is used to broadcast television signals to the entire city.</i></p>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] text-yellow-600 font-bold ">How to get to Landmark 81 Vietnam</h3>
              <p className="my-5">Because Landmark 81 is one of Saigon's most well-known locations, you can quickly move to this place by bus, motorbike, and taxi.</p>
              <div>
                <p className="my-5"><strong className="text-yellow-600">By bus: </strong>Take bus number 30 or 56 to the station of Tan Cang, then take a short walk to get to the tower. </p>
                <p ><strong className="text-yellow-600">By taxi: </strong>Taking a taxi is the safest and most comfortable way to get to Landmark 81 Vietnam. A ride from District 1 costs around 90.000 VND and takes you right to the entrance.</p>
                <p className="my-5"><strong className="text-yellow-600">By private motorbike/car: </strong>It takes about 15 to 20 minutes to get there from District 1, depending on the traffic.</p>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] text-yellow-600 font-bold ">Amusement and recreational activities at Landmark 81 Ho Chi Minh</h3>
              <p className="my-5">Landmark 81 Vietnam takes pride in being a symbol of class and prosperity, so expect a plethora of notable services and memorable experiences.</p>

              <div>
                <h4 className="text-[20px] text-yellow-600 font-bold my-5">Landmark 81 Skyview</h4>
                <p>The whole observatory is surrounded by a transparent glass system, which allows visitors to see the entire city of Ho Chi Minh from above. Furthermore, the sky view observatory has a dining area, cafe, and thrilling games. </p>

                <img src={detailImg3} className="my-5"/>

                <p>Each floor of the observation deck offers unique activities. The 79th floor features "cloud" chairs as well as a coffee lounge. On the 80th floor, you can play a virtual reality game called "Top of Vietnam", which simulates a parachute jump from the top of Landmark 81 Vietnam. The 81st floor features an open-air terrace called SkyTouch, where visitors can feel the air and wind at 383 meters above the ground. This outdoor terrace is the world's fifth-highest outdoor observation deck.</p>

                <p className="my-5"><strong className="text-yellow-600">Operation hours: </strong> <i>Daily from 8:30 am - 11 pm</i></p>

                <p><strong className="text-yellow-600">Ticket price: </strong></p>
                <div className="ml-5">
                  <p><i>- Adults: 300.000 VND (Monday to Friday), 500.000 VND (Saturday and Sunday).</i></p>
                  <p><i>- Children/Elderly people/People with disability: 150.000 VND (Monday to Friday), 250.000 VND (Saturday and Sunday).</i></p>
                  <p><i>- Students: 200.000 VND (Monday to Friday).</i></p>
                </div>

                </div>
                  <h4 className="text-[20px] text-yellow-600 font-bold my-5">Vincom Ice Rink</h4>

                  <p>Landmark 81 ice rink, on the B1 floor, was built to international standards. It is also one of the major attractions at Landmark Saigon. The ice rink is over 2000 square meters wide and can accommodate up to 150 visitors. Besides skating, you can take part in various other exciting games that do not require skating techniques.</p>

                  <img src={detailImg4} className="my-5"/>

                  <p><strong className="text-yellow-600">Reference ticket price: </strong></p>
                  <div className="ml-5">
                    <p><i>- Adults: 200.000 VND/ticket.</i></p>
                    <p><i>- Children: 150.000 VND/ticket.</i></p>
                  </div>
                <div>
              
                <div>
                  <h4 className="text-[20px] text-yellow-600 font-bold my-5">Landmark 81 Park</h4>

                  <p>Vinhomes Park Central Riverside Park is inspired by the famous parks of the exuberant New York City, with a width of 14 hectares designed with green grass, tree streets,... bringing the visitors a great living space. You can walk, relax, and engage with nature.</p>

                  <img src={detailImg5} className="block ml-auto mr-auto w-[50%] my-5" />

                  <p>Things to note when visiting the park: </p>

                  <div className="ml-5">
                    <p><i>- If you want to organize events or parties, you must check with the management board.</i></p>
                    <p><i>- Do not ride motorbikes or drive cars in the park.</i></p>
                    <p><i>- Do not bring pets.</i></p>
                    <p><i>- Do not litter, pick flowers or catch fish.</i></p>
                    <p><i>- Limit taking pictures with a mechanical camera.</i></p>
                    <p><i>- Ticket price: Landmark 81 Park is a public park so that everyone can enter for free.</i></p>
                    <p><i>- Opening hours: 5 am - 9:30 pm</i></p>

                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] text-yellow-600 font-bold my-5">The best restaurants with good views in Landmark 81 Ho Chi Minh</h3>
              <p>Landmark 81 Vietnam is a culinary paradise with 30 restaurants from all over the world. Among which, Capricciosa is famous for its Italian dishes, Sushi Kei offers a unique culinary style from Japan, Gogi House is a place for fans of kimchi cuisine, or traditional Vietnamese dishes such as Ganh Restaurant, Hue Delights, Aunt Mai, … </p>

              <img src={detailImg6} className="w-full h-full my-5" />

              <p className="mb-10">In particular, you will experience a variety of cuisines in Oriental Pearl Restaurant at Vinpearl Landmark 81, Autograph Collection. The Oriental Pearl restaurant on the 66th floor serves well-balanced traditional and modern dishes. The Landmark Pho combines the conventional recipe of Hanoi Pho Thin artisans with Vinpearl's secret and is carefully cooked using premium ingredients such as Wagyu beef and Australian brisket and oxtail.</p>
            </div>

          </div>
        </div>
        <Footer />
      </div>

      
    </div>
  );
};

export default Details;
