import { Box, useFocus } from 'ink';
import React, { useState } from 'react';

import ScrollingList from './ScrollingList';

export default function Tracklist() {
  const { isFocused } = useFocus();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const testTrackList = [
    'Bohemian Rhapsody',
    'Stairway to Heaven',
    'Hotel California',
    'Imagine',
    'Smells Like Teen Spirit',
    'Billie Jean',
    "Sweet Child O' Mine",
    'Shape of You',
    'Rolling in the Deep',
    'Back in Black',
    'Hey Jude',
    'Like a Rolling Stone',
    'I Will Always Love You',
    'Wonderwall',
    "Don't Stop Believin'",
    'All of Me',
    'Creep',
    'My Heart Will Go On',
    'Let It Be',
    'Uptown Funk',
    'Lose Yourself',
    'Rolling Stone',
    'No Woman, No Cry',
    'Born to Run',
    'Take Me to Church',
    'Chasing Cars',
    'Firework',
    'The Sound of Silence',
    'A Thousand Years',
    'Hound Dog',
    'You Are the Reason',
    'With or Without You',
    'I Want to Hold Your Hand',
    'Shake It Off',
    'Despacito',
    'Stay With Me',
    'Dancing Queen',
    'Take On Me',
    'The Way You Make Me Feel',
    'Tainted Love',
    'Sweet Home Alabama',
    'I Gotta Feeling',
    'All Star',
    'Crazy',
    'Girls Just Want to Have Fun',
    'Karma Chameleon',
    'What a Wonderful World',
    'Stand by Me',
    'Let’s Get It On',
    'Africa',
    'Killing Me Softly',
    'Time After Time',
    'The Middle',
    'Counting Stars',
    'Mr. Brightside',
    'Shallow',
    'Lose Control',
    'I Will Survive',
    'Fight Song',
    'Born This Way',
    "Livin' on a Prayer",
    'Eye of the Tiger',
    'Sweet Caroline',
    'Jolene',
    'Take It Easy',
    'I Want It That Way',
    "Say You Won't Let Go",
    'Someone Like You',
    'Rolling in the Deep',
    'Perfect',
    'Halo',
    'Bad Guy',
    'Blinding Lights',
    'Stay',
    'Watermelon Sugar',
    'Good 4 U',
    'As It Was',
    'Peaches',
    'Levitating',
    'drivers license',
    'Montero (Call Me By Your Name)',
    'Butter',
    'Mood',
    'Save Your Tears',
    'Dusk Till Dawn',
    'Never Gonna Give You Up',
    'Take Me Home, Country Roads',
    'You Make My Dreams',
    'I Want You Back',
    "Ain't No Mountain High Enough",
    "Don't Speak",
    'Every Breath You Take',
    'Under Pressure',
    'Hallelujah',
  ];

  return (
    <Box
      borderStyle="round"
      width="50%"
      borderColor={isFocused && 'blueBright'}
    >
      <ScrollingList
        isActive={isFocused}
        items={testTrackList}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </Box>
  );
}
