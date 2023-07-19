import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <h2>
          More than just a reliable Online-Shopping platform
          </h2>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Get to know us</h5>

              <ul className='list-unstyled mb-0 text-decoration-none'>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Carrers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    About Shopy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Our history
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Make Money with Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Sell Products on Shopy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Become An Affiliate
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Advertise your products
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Self-Publish with us
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Sell on Shopy</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Supplier Membership
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Learning center
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Partner Program
                  </a>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Make Money with Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                  Sell Products on Shopy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                  Become An Affiliate
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                  Advertise your products
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                  Self-Publish with us
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
         Shopy.com
        </a>
      </div>
    </MDBFooter>
  );
}