import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle, AlertDialog, AlertDialogAction } from '@/components/ui/alert';

const Dashboard: React.FC = () => {
  const [roomId, setRoomId] = useState('');
  const [passcode, setPasscode] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleJoinRoom = () => {
    // Validate room ID and passcode
    if (roomId.trim() === '' || passcode.trim() === '') {
      setShowAlert(true);
      return;
    }

    // Redirect user to the chat room
    // Replace this with your actual chat room logic
    window.location.href = `/chat/${roomId}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to the Chat App</h1>
          <p className="text-gray-400">Join a room to start chatting!</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Camera className="mr-2" />
            <h2 className="text-xl font-semibold">Join a Room</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="roomId" className="block text-gray-400 font-medium mb-2">
                Room ID
              </label>
              <input
                type="text"
                id="roomId"
                placeholder="Enter room ID"
                className="bg-gray-700 border-none rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="passcode" className="block text-gray-400 font-medium mb-2">
                Passcode
              </label>
              <input
                type="password"
                id="passcode"
                placeholder="Enter passcode"
                className="bg-gray-700 border-none rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
              />
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full"
              onClick={handleJoinRoom}
            >
              Join Room
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            Don&apost have a room? <a href="#" className="text-blue-500 hover:underline">Create one</a>
          </p>
        </div>

        <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="bg-gray-900 bg-opacity-80 fixed inset-0" />
            <AlertDialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
              <AlertDialog.Title className="text-xl font-bold mb-2">Oops!</AlertDialog.Title>
              <AlertDialog.Description className="text-gray-400 mb-4">
                Please enter a valid Room ID and Passcode.
              </AlertDialog.Description>
              <div className="flex justify-end">
                <AlertDialogAction
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mr-2"
                  onClick={() => setShowAlert(false)}
                >
                  OK
                </AlertDialogAction>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Dashboard;