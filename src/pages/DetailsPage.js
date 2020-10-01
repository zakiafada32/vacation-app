import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Activities from 'parts/Activities';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

import itemDetails from 'json/itemDetails';

class DetailsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Details Page';
  }

  render() {
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className='container'>
          <div className='row'>
            <div className='col-7 pr-5'>
              <Fade bottom>
                <PageDetailDescription data={itemDetails} />
              </Fade>
            </div>
            <div className='col-5'>
              <Fade bottom>
                <BookingForm
                  itemDetails={itemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Activities data={itemDetails.categories[0].items} />
        <Testimony data={itemDetails.testimonial} />

        <Footer />
      </>
    );
  }
}

export default DetailsPage;
