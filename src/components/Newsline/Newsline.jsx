import React from 'react';

import CardNews from '../CardNews/CardNews';

function Newsline() {
  return (
    <div className="newsline">
      <CardNews title="Card1" content="sdfdsf" tags="#sadsad #ewweq" image="/images/sea.jpg" username="Andrey" />
      <CardNews title="Card2" content="sdfdsf" tags="#sadsad #ewweq" image="/images/sea.jpg" username="Vlad" />
      <CardNews title="Card3" content="sdfdsf" tags="#sadsad #ewweq" image="/images/sea.jpg" username="Stas" />
      <CardNews title="Card4" content="sdfdsf" tags="#sadsad #ewweq" image="/images/sea.jpg" username="Oleg" />
      <CardNews title="Card5" content="sdfdsf" tags="#sadsad #ewweq" image="/images/sea.jpg" username="Igor" />
    </div>
  );
}

export default Newsline;
