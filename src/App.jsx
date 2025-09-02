
// import { useState } from 'react'

// function App() {
//   const [emailContent, setEmailContent] = useState('');
//   const [tone, setTone] = useState('');
//   const [generatedReply, setGeneratedReply] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await fetch("http://localhost:8080/api/email/generate", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           emailContent,
//           tone 
//         })
//       });
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       // Check content type to determine how to parse the response
//       const contentType = response.headers.get('content-type');
//       let data;
      
//       if (contentType && contentType.includes('application/json')) {
//         data = await response.json();
//         setGeneratedReply(typeof data === 'string' ? data : JSON.stringify(data));
//       } else {
//         // Handle plain text response
//         data = await response.text();
//         setGeneratedReply(data);
//       }
//     } catch (error) {
//       setError('Failed to generate email reply. Please try again');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="max-w-4xl mx-auto px-6 py-12">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             Email Reply Generator
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Generate professional email replies with AI assistance
//           </p>
//         </div>

//         {/* Main Form Card */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//           <div className="p-8">
//             {/* Original Email Input */}
//             <div className="mb-8">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 Original Email Content
//               </label>
//               <textarea
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50 hover:bg-white"
//                 rows={6}
//                 placeholder="Paste the email content you want to reply to..."
//                 value={emailContent || ''}
//                 onChange={(e) => setEmailContent(e.target.value)}
//               />
//             </div>

//             {/* Tone Selection */}
//             <div className="mb-8">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 Tone (Optional)
//               </label>
//               <div className="relative">
//                 <select
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none cursor-pointer"
//                   value={tone || ''}
//                   onChange={(e) => setTone(e.target.value)}
//                 >
//                   <option value="">Select a tone...</option>
//                   <option value="professional">Professional</option>
//                   <option value="casual">Casual</option>
//                   <option value="friendly">Friendly</option>
//                   <option value="apologetic">Apologetic</option>
//                   <option value="formal">Formal</option>
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Generate Button */}
//             <button
//               onClick={handleSubmit}
//               disabled={!emailContent || loading}
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
//             >
//               {loading ? (
//                 <div className="flex items-center justify-center">
//                   <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
//                   Generating Reply...
//                 </div>
//               ) : (
//                 "Generate Reply"
//               )}
//             </button>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="px-8 pb-6">
//               <div className="bg-red-50 border border-red-200 rounded-xl p-4">
//                 <div className="flex items-center">
//                   <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                   </svg>
//                   <p className="text-red-700 font-medium">{error}</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Generated Reply Section */}
//         {generatedReply && (
//           <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//             <div className="bg-gradient-to-r from-green-50 to-blue-50 px-8 py-4 border-b border-gray-100">
//               <h2 className="text-xl font-bold text-gray-800 flex items-center">
//                 <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 Generated Reply
//               </h2>
//             </div>
            
//             <div className="p-8">
//               <textarea
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 rows={6}
//                 value={generatedReply || ''}
//                 readOnly
//               />
              
//               <button
//                 onClick={() => navigator.clipboard.writeText(generatedReply)}
//                 className="mt-6 bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 active:scale-95 flex items-center justify-center mx-auto"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                 </svg>
//                 Copy to Clipboard
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Footer */}
//         <div className="text-center mt-12">
//           <p className="text-gray-500">
//             Powered by AI • Generate professional email replies in seconds
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App


import { useState } from 'react'

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

      const response = await fetch(`${API_URL}/api/email/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailContent,
          tone 
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Check content type to determine how to parse the response
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
        setGeneratedReply(typeof data === 'string' ? data : JSON.stringify(data));
      } else {
        // Handle plain text response
        data = await response.text();
        setGeneratedReply(data);
      }
    } catch (error) {
      setError('Failed to generate email reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Email Reply Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Generate professional email replies with AI assistance
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            {/* Original Email Input */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Original Email Content
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50 hover:bg-white"
                rows={6}
                placeholder="Paste the email content you want to reply to..."
                value={emailContent || ''}
                onChange={(e) => setEmailContent(e.target.value)}
              />
            </div>

            {/* Tone Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tone (Optional)
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none cursor-pointer"
                  value={tone || ''}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <option value="">Select a tone...</option>
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="friendly">Friendly</option>
                  <option value="apologetic">Apologetic</option>
                  <option value="formal">Formal</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleSubmit}
              disabled={!emailContent || loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Generating Reply...
                </div>
              ) : (
                "Generate Reply"
              )}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="px-8 pb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Generated Reply Section */}
        {generatedReply && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 px-8 py-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Generated Reply
              </h2>
            </div>
            
            <div className="p-8">
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={6}
                value={generatedReply || ''}
                readOnly
              />
              
              <button
                onClick={() => navigator.clipboard.writeText(generatedReply)}
                className="mt-6 bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 active:scale-95 flex items-center justify-center mx-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy to Clipboard
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Powered by AI • Generate professional email replies in seconds
          </p>
        </div>
      </div>
    </div>
  )
}

export default App