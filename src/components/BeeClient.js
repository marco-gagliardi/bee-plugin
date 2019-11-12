import React, {Fragment, useEffect, useState} from 'react'
import Beeplugin from '@mailupinc/bee-plugin'
import beeTemplate from '../assets/beeTemplate'
import './BeeClient.css'

const AUTH = {
  client_id: "715f97bc-7b0c-43cb-992b-8545c4193789", // Enter your client id
  client_secret: "sBMw4yfFyVUdquamCp0SnJJyEPO2r8VmIxcOUu4MeTMROhftTmgb", // Enter your secret key
  grant_type: "password" // Do not change
};

const download = (content, fileName, contentType) => {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}


const BeeClient = (props) => {
  const CONFIG = {
    uid: 'test1-clientside', //needed for identify resources of the that user and billing stuff
    container: 'bee-plugin-container', //Identifies the id of div element that contains BEE Plugin
    language: 'en-US',
    onSaveAsTemplate: (jsonFile) => {
      download(jsonFile, 'beeTemplate.json', 'text/plain');
    },
    onSave: (jsonFile, htmlFile) => {
      download(jsonFile, 'beeTemplate.json', 'text/plain');
      download(htmlFile, 'beeTemplate.html', 'text/plain');
    },
  }

  const [authenticating, setAuthenticating] = useState(true)
  const [loading, setLoading] = useState(true)
  const [instance, setInstance] = useState(null)

  function init() {
    const beeTest = new Beeplugin()
    beeTest.getToken(AUTH.client_id, AUTH.client_secret)
      .then(() => {
        beeTest.start(CONFIG, beeTemplate)
          .then(() => setInstance(beeTest))
          .then(() => setLoading(false))
        setAuthenticating(false)
      })
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div id="bee-plugin-container">
      {
        authenticating
          ? <span>Authentication in progress...</span>
          : <div className='header'>
            <button disabled={loading} className='btn btn-primary' onClick={() => instance.save()}>Save</button>
            <button disabled={loading} className='btn btn-primary' onClick={() => instance.saveAsTemplate()}>Save as Template</button>
            <button disabled={loading} className='btn btn-primary' onClick={() => instance.preview()}>Preview</button>
          </div>
      }
    </div>
  )
};

export default BeeClient