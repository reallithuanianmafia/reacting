import React, {useState}from 'react';

const Blog = () => {

    const [age, setAge] = useState(22);
    
    return (
        <>
        <div>I am mounted now.</div>
        <div>{age}</div>
        </>
    );
}

export default Blog;