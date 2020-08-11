import React from 'react';

import values from '../files/SL-values.zip';
import moodboard from '../files/SL-moodboard.zip';
import logos from '../files/SL-logos.zip';
import misc from '../files/SL-misc.zip';

function Download() {
  return (
    <div className="download">
      <h1>Download All Your Branding Files</h1>
      <p>Please note that you will have to install all fonts before opening <br></br>any attached files in Abode Illustrator</p>
      <p>Toledo Serial is in the Moodboard zip folder attached</p>
      <p>Commuters Sans & OFL Sorts Mill Goudy are both Adobe fonts, <br></br>so please go to adobe to turn on these fonts, links below</p>
      <a href="https://fonts.adobe.com/fonts/commuters-sans" target="new">Commuters Sans</a>
      <a href="https://fonts.adobe.com/fonts/ofl-sorts-mill-goudy" target="new">OFL Sorts Mill Goudy</a>
      <a href={values}>Spirit Luxe Values Zip File</a>
      <a href={moodboard}>Spirit Luxe Moodboard Zip File</a>
      <a href={logos}>Spirit Luxe Logos Zip File</a>
      <a href={misc}>Spirit Luxe Misc Zip File</a>


    </div >
  );
}

export default Download;