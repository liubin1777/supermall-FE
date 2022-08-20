import React from 'react';
import styles from './index.module.css';
import Lottie from 'lottie-react';
import lottieData from '@asset/lottie/error.json';

const style = {
  width: 300,
  height: 300,
  // background: '#fff000',
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={styles.root}>
          <Lottie animationData={lottieData} style={style} />
          <div className={styles.desc}>页面出错了~</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;