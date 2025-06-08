
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Clock, XCircle, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Question {
  id: string;
  name: string;
  email: string;
  category: string;
  question: string;
  answer?: string;
  status: 'pending' | 'answered' | 'closed';
  created_at: string;
}

export const AdminDashboard = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    fetchQuestions();
  }, [filterStatus]);

  const fetchQuestions = async () => {
    try {
      let query = supabase
        .from('questions')
        .select('*')
        .order('created_at', { ascending: false });

      if (filterStatus !== "all") {
        query = query.eq('status', filterStatus);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      // Type cast the data to ensure status is properly typed
      const typedData = (data || []).map(item => ({
        ...item,
        status: item.status as 'pending' | 'answered' | 'closed'
      }));

      setQuestions(typedData);
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerQuestion = async (questionId: string) => {
    if (!answer.trim()) {
      return;
    }

    try {
      const { error } = await supabase
        .from('questions')
        .update({
          answer: answer,
          status: 'answered',
          updated_at: new Date().toISOString()
        })
        .eq('id', questionId);

      if (error) {
        throw error;
      }

      setAnswer("");
      setSelectedQuestion(null);
      fetchQuestions();
    } catch (error) {
      console.error('Error answering question:', error);
    }
  };

  const handleStatusChange = async (questionId: string, newStatus: 'pending' | 'answered' | 'closed') => {
    try {
      const { error } = await supabase
        .from('questions')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', questionId);

      if (error) {
        throw error;
      }

      fetchQuestions();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'answered':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200"><CheckCircle className="h-3 w-3 mr-1" />Answered</Badge>;
      case 'closed':
        return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200"><XCircle className="h-3 w-3 mr-1" />Closed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section className="py-16 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Admin Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage student questions and provide helpful answers to support the GSV community.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm font-medium">Filter by status:</span>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="all">All Questions</option>
            <option value="pending">Pending</option>
            <option value="answered">Answered</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-muted-foreground mt-2">Loading questions...</p>
            </div>
          ) : questions.length === 0 ? (
            <Card className="text-center py-12 backdrop-blur-sm bg-card/95">
              <CardContent>
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No questions found</h3>
                <p className="text-muted-foreground">
                  {filterStatus === "all" ? "No questions have been submitted yet." : `No ${filterStatus} questions found.`}
                </p>
              </CardContent>
            </Card>
          ) : (
            questions.map((question) => (
              <Card key={question.id} className="backdrop-blur-sm bg-card/95">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">
                        Question from {question.name}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span>{question.email}</span>
                        <Badge variant="secondary">{question.category}</Badge>
                        <span>{formatDate(question.created_at)}</span>
                      </div>
                    </div>
                    {getStatusBadge(question.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Question:</h4>
                      <p className="text-foreground whitespace-pre-wrap bg-muted/50 p-3 rounded-md">
                        {question.question}
                      </p>
                    </div>

                    {question.answer && (
                      <div>
                        <h4 className="font-medium mb-2">Answer:</h4>
                        <p className="text-foreground whitespace-pre-wrap bg-green-50 p-3 rounded-md border border-green-200">
                          {question.answer}
                        </p>
                      </div>
                    )}

                    {selectedQuestion?.id === question.id ? (
                      <div className="space-y-4">
                        <Textarea
                          value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                          placeholder="Type your answer here..."
                          rows={4}
                        />
                        <div className="flex gap-2">
                          <Button 
                            onClick={() => handleAnswerQuestion(question.id)}
                            className="leetcode-btn"
                            disabled={!answer.trim()}
                          >
                            Submit Answer
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => {
                              setSelectedQuestion(null);
                              setAnswer("");
                            }}
                            className="leetcode-btn"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {question.status === 'pending' && (
                          <Button 
                            onClick={() => {
                              setSelectedQuestion(question);
                              setAnswer(question.answer || "");
                            }}
                            className="leetcode-btn"
                            size="sm"
                          >
                            Answer Question
                          </Button>
                        )}
                        
                        {question.status !== 'answered' && (
                          <Button 
                            onClick={() => handleStatusChange(question.id, 'answered')}
                            variant="outline"
                            className="leetcode-btn"
                            size="sm"
                          >
                            Mark as Answered
                          </Button>
                        )}
                        
                        {question.status !== 'closed' && (
                          <Button 
                            onClick={() => handleStatusChange(question.id, 'closed')}
                            variant="outline"
                            className="leetcode-btn"
                            size="sm"
                          >
                            Close
                          </Button>
                        )}
                        
                        {question.status !== 'pending' && (
                          <Button 
                            onClick={() => handleStatusChange(question.id, 'pending')}
                            variant="outline"
                            className="leetcode-btn"
                            size="sm"
                          >
                            Reopen
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
