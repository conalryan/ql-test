export interface Alert {
    type: 'success' | 'info' | 'warning' | 'error';
    message: string;
}