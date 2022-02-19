import type { PropsWithChildren } from 'react';
import { Component } from 'react';
import './index.less';
import earthSvg from '@/assets/img/earth.svg';
import { Button } from 'antd';

const TryAgain = () => {
  return (
    <p>
      <Button
        style={{ width: 90 }}
        data-i18n-hint="try-again"
        onClick={() => {
          window.location.reload();
        }}
      >
        Try Again
      </Button>
    </p>
  );
};

const NetworkError = ({ error }: { error: unknown }) => {
  return (
    <div className="error-boundary">
      <div
        className="avatar"
        style={{ '--url': `url('${earthSvg}')` } as any}
      />
      <div>
        <h2>Network Error</h2>
        <p data-i18n-hint="check-network-setting">
          Check your network settings.
        </p>
        <TryAgain />
        <pre>{String(Object(error).stack)}</pre>
      </div>
    </div>
  );
};

export class ErrorBoundary extends Component<
  PropsWithChildren<{ error?: unknown }>
> {
  state: { error?: any } = {};
  static getDerivedStateFromError(error: any) {
    return { error };
  }
  render() {
    const { error = this.props.error } = this.state;
    if (!error) return this.props.children;
    const { name, message } = error;
    if (
      (typeof message === 'string' && /\bFailed to fetch\b/.test(message))
    ) {
      return <NetworkError error={error} />;
    }
  }
}
