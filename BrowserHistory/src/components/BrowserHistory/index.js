import {useState} from 'react'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const BrowserHistory = () => {
  const [historyList, setHistoryList] = useState(initialHistoryList)
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const onDeleteHistory = id => {
    const updatedHistoryList = historyList.filter(
      eachItem => eachItem.id !== id,
    )

    setHistoryList(updatedHistoryList)
  }

  const filteredHistoryList = historyList.filter(eachItem =>
    eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="browser-history-container">
      <div className="history-header">
        <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt="app logo"/>
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search-icon"
          />
          <input
            type="search"
            placeholder="Search history"
            value={searchInput}
            onChange={onChangeSearchInput}
            className="search-input"
          />
        </div>
      </div>
      <ul>
        <div className="history-list">
          {filteredHistoryList.length === 0 ? (
            <p className="empty-message"> There is no history to show</p>
          ) : (
            filteredHistoryList.map(eachItem => (
              <li className="history-item" key={eachItem.id}>
                <p className="time">{eachItem.timeAccessed}</p>
                <img
                  src={eachItem.logoUrl}
                  alt="domain logo"
                  className="website-logo"
                />
                <div className="website-details">
                  <p className="website-title">{eachItem.title}</p>
                  <p className="domain">{eachItem.domainUrl}</p>
                </div>
                <button
                  type="button"
                  data-testid="delete"
                  className="delete-button"
                  onClick={() => onDeleteHistory(eachItem.id)}
                  aria-label="delete"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                    className="delete-icon"
                  />
                </button>
              </li>
            ))
          )}
        </div>
      </ul>
    </div>
  )
}

export default BrowserHistory
