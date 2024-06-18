import React, { useState, useEffect } from 'react';

const SeconsCounter = ({ seconds }) => {
const [currentSeconds, setCurrentSeconds] = useState(seconds);

useEffect(() => {
const instervalid = setInterval(() => {
	setCurrentSeconds((prevSeconds) => prevSeconds + 1);
}, 1000);
	
return () => clearInterval(instervalid);

}, []);

return (
<div>
	<i className="fas fas-clock"></i> {currentSeconds}
</div>
);
};

// Example usage in your app
const App = () => {
	return (
		<div>
			<h1>Seconds Counter</h1>
			<SeconsCounter seconds={0} />
		</div>
	);
};

export default App;
