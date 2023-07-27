type IconProps = React.SVGAttributes<HTMLOrSVGElement>;

export const Chat = (props: IconProps): JSX.Element => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.3817 22 8.81782 21.6146 7.41286 20.888L3.58704 21.9553C2.92212 22.141 2.23258 21.7525 2.04691 21.0876C1.98546 20.8676 1.98549 20.6349 2.04695 20.4151L3.11461 16.5922C2.38637 15.186 2 13.6203 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 13.4696 3.87277 14.8834 4.57303 16.1375L4.72368 16.4072L3.61096 20.3914L7.59755 19.2792L7.86709 19.4295C9.12006 20.1281 10.5322 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM8.75 13H13.2483C13.6625 13 13.9983 13.3358 13.9983 13.75C13.9983 14.1297 13.7161 14.4435 13.35 14.4932L13.2483 14.5H8.75C8.33579 14.5 8 14.1642 8 13.75C8 13.3703 8.28215 13.0565 8.64823 13.0068L8.75 13H13.2483H8.75ZM8.75 9.5H15.2545C15.6687 9.5 16.0045 9.83579 16.0045 10.25C16.0045 10.6297 15.7223 10.9435 15.3563 10.9932L15.2545 11H8.75C8.33579 11 8 10.6642 8 10.25C8 9.8703 8.28215 9.55651 8.64823 9.50685L8.75 9.5H15.2545H8.75Z" fill="#A19F9D"/>
    </svg>
  )
}

export const SendButton = (props: IconProps): JSX.Element => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10.8163 10.1973L3.2851 11.4525C3.10871 11.4819 2.96145 11.6032 2.89889 11.7708L0.300996 18.7282C0.0523228 19.3676 0.721746 19.9777 1.33541 19.6708L19.3354 10.6708C19.8882 10.3944 19.8882 9.60557 19.3354 9.32918L1.33541 0.329181C0.721746 0.0223491 0.0523228 0.632391 0.300996 1.27184L2.89889 8.22923C2.96145 8.39675 3.10871 8.51812 3.2851 8.54752L10.8163 9.80272C10.9253 9.82088 10.9989 9.92393 10.9807 10.0329C10.9667 10.1172 10.9006 10.1832 10.8163 10.1973Z" fill="#407EC9"/>
    </svg>
  )
}


export const PickFiles = (props: IconProps): JSX.Element => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.82843 10.4853L10.4853 4.82843C11.6569 3.65686 13.5563 3.65686 14.7279 4.82843C15.8995 6 15.8995 7.8995 14.7279 9.07107L8.01041 15.7886C7.42462 16.3744 6.47487 16.3744 5.88909 15.7886C5.3033 15.2028 5.3033 14.2531 5.88909 13.6673L11.8995 7.65686C12.0948 7.46159 12.0948 7.14501 11.8995 6.94975C11.7042 6.75449 11.3876 6.75449 11.1924 6.94975L5.18198 12.9602C4.20567 13.9365 4.20567 15.5194 5.18198 16.4957C6.15829 17.472 7.7412 17.472 8.71751 16.4957L15.435 9.77818C16.9971 8.21608 16.9971 5.68342 15.435 4.12132C13.8729 2.55922 11.3403 2.55922 9.77817 4.12132L4.12132 9.77818C3.92606 9.97344 3.92606 10.29 4.12132 10.4853C4.31658 10.6805 4.63316 10.6805 4.82843 10.4853Z" fill="#605E5C"/>
    </svg>
  )
}