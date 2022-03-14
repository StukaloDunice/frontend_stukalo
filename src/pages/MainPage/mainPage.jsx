import React from 'react';
import { connect } from 'react-redux';
import CardNews from '../../components/CardNews/CardNews';

function MainPage() {
  return (
    <div className="mainPage">
      <CardNews title="Card1" content="sdfdsf" tags="#sadsad #ewweq" image="/images/sea.jpg" username="Andrey" />
    </div>
  );
}

export default connect(null, null)(MainPage);
