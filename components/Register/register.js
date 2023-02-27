import React from 'react'
import "./register.css"

import { useParams } from 'react-router-dom'
import { Step1 } from './step1'
import { Step2 } from './step2'
import { Step3 } from './step3'
import { Step4 } from './step4'
import { Step5 } from './step5'
import { Step6 } from './step6'
export const RegisterNew = ({setUserLogin}) => {
    var {next} = useParams()
    console.log(next);
  return (
    <div className="registerPage">
        {next == "step1" &&
        <>
            <Step1 />
        </>
        }
        {next == "step2" &&
        <>
            <Step2 />
        </>
        }
        {next == "step3" &&
        <>
            <Step3 />
        </>
        }
        {next == "step4" &&
        <>
            <Step4 />
        </>
        }
        {next == "step5" &&
        <>
            <Step5 />
        </>
        }
        {next == "step6" &&
        <>
            <Step6 setUserLogin={setUserLogin} />
        </>
        }
    </div>
  )
}
