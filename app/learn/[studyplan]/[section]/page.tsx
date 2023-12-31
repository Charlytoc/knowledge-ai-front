'use client'
import Footer from "@/app/resources/components/ui/Footer";
import NavBar from "@/app/resources/components/ui/NavBar";
import { themes, useStore } from "@/app/resources/context/store";
import { topics } from "@/app/resources/files/topics";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from 'react-markdown'

interface ISectionPageProps {
    params: {
        section: string;
    }
}

const defaultSection = {
    id: 0,
    title: "",
    objective: "",
    topics: [
        {
            explanation: "",
            id: 0,
            title: "",
            objective: "",
            discussions: [

            ]
        }
    ]
}

export default function SectionPage(props:ISectionPageProps) {
    const { settings, getTokenFromLocalStorage } = useStore()
    const [section, setSection] = useState(defaultSection)

    const getSectionById = async () => {
        const token = getTokenFromLocalStorage()

        const API_URL = process.env.NEXT_PUBLIC_API_URL
        try {
            const response = await axios.get(`${API_URL}/v1/learning/section/${props.params.section}`);
            setSection(response.data)

            if (response.data.topics.length < 1) {
                createTopicsFromSection()
            }
            // console.log(response.data);
            
        } catch (error) {
          console.error('Error sending study plan:', error);
        }
    }

    const createTopicsFromSection = async () => {
        const token = '1EfGWWhkijtac7d0S0UL'; // Replace with your actual token
        const API_URL = process.env.NEXT_PUBLIC_API_URL

        try {
            const response = await axios.post(`${API_URL}/v1/learning/section/${props.params.section}`);
            setSection(response.data)
        } catch (error) {
          console.error('Error sending study plan:', error);
        }
    }

    useEffect(()=>{
        getSectionById()
    }, [])
    return (
        <main className={`page page-section ${settings.theme}`}>
            <NavBar />
            <h3>{section.title}</h3>
            {section.topics.length < 1
             ? <button onClick={createTopicsFromSection}>Create topics</button>
            :<TopicCarousel topics={section.topics}/>}
            
            <Footer />
        </main>
    )
}

interface ITopic {
    id: number
    explanation: string
    title: string
    objective: string
    discussions: Array<IDiscussion>
}

interface ITopicCarouselProps {
    topics: Array<ITopic>
}

const TopicCarousel = (props: ITopicCarouselProps) => {
    const [currentIndex, setCurrentIndex]  =useState(0)
    const {apiUrl, getTokenFromLocalStorage} = useStore()
    const [discussionComment, setDiscussionComment]  =useState('')
    const [discussionsList, setDiscussionsList] = useState(props.topics[currentIndex].discussions)

    const handleTopicChange = (difference: number) => {
        const topicsLength = props.topics.length;
        let newTopic = (currentIndex + difference + topicsLength) % topicsLength;
        setCurrentIndex(newTopic)
    }

    const handleDiscussionComment = (e:any) => {
        setDiscussionComment(e.target.value)
    }

    const handleStartDiscussion = async () => {
        const token = getTokenFromLocalStorage();
        const API_URL = apiUrl;
    
        const data = {
            topic_id: props.topics[currentIndex].id,
            text: discussionComment
        };
        
        
        const headers = {
            Authorization: 'Token ' + token,
        };
    
        try {
            const response = await axios.post(`${API_URL}/v1/learning/discussion`, data, { headers });
            // setSection(response.data)
            console.log(response.data);
    
        } catch (error) {
            console.error('Error sending study plan:', error);
        }
    }

    return (
        <div className="component-topic-carousel">
            
            <TopicComponent topic={props.topics[currentIndex]} />
            <div className="actions">
                <button onClick={()=>handleTopicChange(-1)}>Previous</button>
                <button onClick={()=>handleTopicChange(1)}>Next</button>
                <span>{currentIndex +1} / {props.topics.length}</span>
            </div>
            <div className="discussion-list">
                <h3>Feel free to ask something to the community!</h3>
                <div className="comment-input">
                    <textarea onChange={handleDiscussionComment} value={discussionComment} placeholder="Start a new discussion" />
                    <button onClick={handleStartDiscussion}>Start discussion</button>
                </div>
                {
                    props.topics[currentIndex].discussions.map((item, index) => (
                        <DiscussionComponent key={index} discussion={item} />
                    ))
                }
            </div>
        </div>
    )
}

interface IComment {
    text: string
}

interface IDiscussion {
    id:number
    text: string
    comments: Array<IComment>
}

interface IDiscussionComponentProps {
    discussion:IDiscussion
}

const DiscussionComponent = (props:IDiscussionComponentProps) => {
    const [commentsAreVisible, setCommentsAreVisible] = useState(false)
    const {getTokenFromLocalStorage, apiUrl} = useStore()

    const handleAIComment = async () => {
        const token = getTokenFromLocalStorage() // Replace with your actual token
        const API_URL = apiUrl;
    
        const data = {
            discussion_id: props.discussion.id,
            with_ai: true
        };

        const headers = {
            Authorization: 'Token ' + token,
        };
    
        try {
            const response = await axios.post(`${API_URL}/v1/learning/comment`, data, { headers });
            // setSection(response.data)
            console.log(response.data);
    
        } catch (error) {
            console.error('Error sending study plan:', error);
        }
    }

    return (
        <div className="component-discussion">
            <div className="info">
                <p>{props.discussion.text}</p>
            </div>
            <div className="actions">
                <span onClick={()=>setCommentsAreVisible(!commentsAreVisible)}>
                    {commentsAreVisible? 'Hide' : 'See'} comments
                </span>
                <span onClick={handleAIComment}>Comment with AI</span>
            </div>
            {commentsAreVisible ?
            <>

            {
                props.discussion.comments.map((item, index)=>(
                    <CommentComponent key={index} comment={item} />
                ))
            }
            </>
            :
            null
            }
        </div>
    )
}

interface ICommentComponentProps {
    comment: IComment
}

const CommentComponent = ({comment}:ICommentComponentProps) => {
    return (
        <div className="component-comment">
            <p>{comment.text}</p>
        </div>
    )
}


interface ITopicComponentProps {
    topic: ITopic
}

const TopicComponent = (props:ITopicComponentProps) => {
    const {getTokenFromLocalStorage,apiUrl} = useStore()

    const [createdContent, setCreatedContent] = useState('')

    const createTopicContent = async () => {
        const token = getTokenFromLocalStorage() // Replace with your actual token
        const API_URL = apiUrl;
    
        const data = {
            topic_id: props.topic.id,
        }

        const headers = {
            Authorization: 'Token ' + token,
        };
    
        try {
            const response = await axios.post(`${API_URL}/v1/learning/topic`,data,{ headers });
            setCreatedContent(response.data.explanation)
            
        } catch (error) {
            console.error('Error sending study plan:', error);
        }
    }


    useEffect(()=>{
        setCreatedContent('');

        if (props.topic.explanation.length < 1) {
            createTopicContent()
        }
    }, [props.topic.id])


    return (
        <div className="component-topic">
            <h3>{props.topic.title}</h3>
            {
                createdContent ? <p>{createdContent}</p> : <p>{props.topic.explanation}</p>
            }
            
        </div>
    )
}